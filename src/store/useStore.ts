import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import lesson1 from '@/assets/lessons/economics/lesson1.json'
import lesson2 from '@/assets/lessons/economics/lesson2.json'
import finalLesson from '@/assets/lessons/economics/final.json'

export type LessonState = 'locked' | 'current' | 'completed'
export type LessonSlideType = 'text' | 'quiz'

export interface LessonSlide {
  id: string
  type: LessonSlideType
  content: string
  options?: string[]
  correctAnswer?: number
}

export interface Lesson {
  id: string
  title: string
  state: LessonState
  rewardXP: number
  slides: LessonSlide[]
  isFinal?: boolean
}

export interface UserStats {
  xp: number
  level: number
  streak: number
  dailyGoal: number
  todayXP: number
  coins: number
  gems: number
  lastLessonDate?: string | null
  lastDailyReset?: string | null
}

export interface Profile {
  nickname: string
  remindersEnabled: boolean
  reminderHour: number
}

type AnalyticsEvent = 'lesson_complete' | 'daily_goal_complete' | 'streak_inc' | 'app_open'

interface AppState {
  lessons: Lesson[]
  selectedLessonId: string
  userStats: UserStats
  profile: Profile
  hydrated: boolean
  analytics: AnalyticsEvent[]
  selectLesson: (id: string) => void
  completeLesson: (id: string) => void
  updateDailyGoal: (goal: number) => void
  updateNickname: (nickname: string) => void
  setReminderHour: (hour: number) => void
  setRemindersEnabled: (enabled: boolean) => void
  resetProgress: () => void
  setHydrated: (value: boolean) => void
  recordEvent: (event: AnalyticsEvent) => void
  refreshDailyProgress: () => void
}

const sourceLessons = [lesson1, lesson2, finalLesson]

function createInitialLessons(): Lesson[] {
  return sourceLessons.map((lesson, index) => ({
    ...lesson,
    state: index === 0 ? 'current' : 'locked'
  }))
}

const defaultStats: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  dailyGoal: 50,
  todayXP: 0,
  coins: 0,
  gems: 0,
  lastLessonDate: null,
  lastDailyReset: null
}

const defaultProfile: Profile = {
  nickname: 'Новичок',
  remindersEnabled: false,
  reminderHour: 18
}

function calculateLevel(xp: number) {
  return Math.floor(xp / 100) + 1
}

function currentDateKey() {
  return new Date().toISOString().slice(0, 10)
}

function isNextDay(previous?: string | null) {
  if (!previous) return true
  const today = currentDateKey()
  const prev = previous
  const todayDate = new Date(today)
  const prevDate = new Date(prev)
  const diff = todayDate.getTime() - prevDate.getTime()
  return diff >= 24 * 60 * 60 * 1000 && diff < 48 * 60 * 60 * 1000
}

function isSameDay(previous?: string | null) {
  if (!previous) return false
  return previous === currentDateKey()
}

const initialLessons = createInitialLessons()

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      lessons: initialLessons,
      selectedLessonId: initialLessons[0].id,
      userStats: defaultStats,
      profile: defaultProfile,
      hydrated: false,
      analytics: [],
      selectLesson: (id) => {
        set({ selectedLessonId: id })
      },
      completeLesson: (id) => {
        const state = get()
        const lessons = state.lessons.map((lesson) =>
          lesson.id === id ? { ...lesson, state: 'completed' } : { ...lesson }
        )

        const currentIndex = lessons.findIndex((lesson) => lesson.id === id)
        if (currentIndex >= 0 && currentIndex + 1 < lessons.length) {
          const nextLesson = lessons[currentIndex + 1]
          if (nextLesson.state === 'locked') {
            lessons[currentIndex + 1] = { ...nextLesson, state: 'current' }
          }
        }

        const completedLesson = state.lessons.find((lesson) => lesson.id === id)
        const reward = completedLesson?.rewardXP ?? 0

        const todayKey = currentDateKey()
        let { lastDailyReset } = state.userStats
        let todayXP = state.userStats.todayXP
        if (lastDailyReset !== todayKey) {
          todayXP = 0
          lastDailyReset = todayKey
        }
        todayXP += reward

        const xp = state.userStats.xp + reward
        const level = calculateLevel(xp)

        let streak = state.userStats.streak
        const lastLessonDate = state.userStats.lastLessonDate
        if (isSameDay(lastLessonDate)) {
          streak = state.userStats.streak
        } else if (isNextDay(lastLessonDate)) {
          streak = state.userStats.streak + 1
          setTimeout(() => get().recordEvent('streak_inc'), 0)
        } else {
          streak = 1
        }

        const coins = state.userStats.coins + Math.round(reward / 2)
        const gems = state.userStats.gems + (completedLesson?.isFinal ? 1 : 0)

        const selectedLessonId =
          currentIndex >= 0 && currentIndex + 1 < lessons.length
            ? lessons[currentIndex + 1].id
            : lessons[currentIndex]?.id ?? state.selectedLessonId

        set({
          lessons,
          selectedLessonId,
          userStats: {
            ...state.userStats,
            xp,
            level,
            todayXP,
            streak,
            coins,
            gems,
            lastLessonDate: todayKey,
            lastDailyReset
          }
        })

        get().recordEvent('lesson_complete')
        if (todayXP >= state.userStats.dailyGoal) {
          get().recordEvent('daily_goal_complete')
        }
      },
      updateDailyGoal: (goal) => {
        set((state) => ({
          userStats: { ...state.userStats, dailyGoal: Math.max(10, Math.round(goal)) }
        }))
      },
      updateNickname: (nickname) => {
        set((state) => ({ profile: { ...state.profile, nickname } }))
      },
      setReminderHour: (hour) => {
        set((state) => ({ profile: { ...state.profile, reminderHour: hour } }))
      },
      setRemindersEnabled: (enabled) => {
        set((state) => ({ profile: { ...state.profile, remindersEnabled: enabled } }))
      },
      refreshDailyProgress: () => {
        const state = get()
        const todayKey = currentDateKey()
        if (state.userStats.lastDailyReset !== todayKey) {
          set({
            userStats: {
              ...state.userStats,
              todayXP: 0,
              lastDailyReset: todayKey
            }
          })
        }
      },
      resetProgress: () => {
        const freshLessons = createInitialLessons()
        set({
          lessons: freshLessons,
          selectedLessonId: freshLessons[0].id,
          userStats: { ...defaultStats },
          profile: { ...defaultProfile }
        })
      },
      setHydrated: (value) => set({ hydrated: value }),
      recordEvent: (event) => {
        set((state) => ({ analytics: [...state.analytics.slice(-49), event] }))
        console.log('[analytics]', event)
      }
    }),
    {
      name: 'ege-prokachka-store',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true)
      }
    }
  )
)
