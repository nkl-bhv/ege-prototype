import { ScrollView, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useMemo } from 'react'

import { useStore } from '@/store/useStore'

const ACHIEVEMENTS = [
  { id: 'first', title: 'Первый урок завершён', requirement: (completed: number, streak: number) => completed >= 1 },
  { id: 'streak3', title: '3 дня подряд', requirement: (_c: number, streak: number) => streak >= 3 },
  { id: 'lessons10', title: '10 уроков подряд', requirement: (completed: number) => completed >= 10 }
]

export function AchievementsScreen() {
  const lessons = useStore((state) => state.lessons)
  const streak = useStore((state) => state.userStats.streak)

  const completedCount = useMemo(
    () => lessons.filter((lesson) => lesson.state === 'completed').length,
    [lessons]
  )

  return (
    <ScrollView className="flex-1 bg-[#f9fafb]" contentContainerStyle={{ padding: 24 }}>
      <Text className="mb-4 text-2xl font-bold text-text">Достижения</Text>
      {ACHIEVEMENTS.map((achievement) => {
        const unlocked = achievement.requirement(completedCount, streak)
        return (
          <View
            key={achievement.id}
            className={`mb-4 flex-row items-center rounded-2xl border px-4 py-4 ${
              unlocked ? 'border-secondary bg-surface shadow-sm' : 'border-muted bg-white/60'
            }`}
          >
            <Ionicons
              name={unlocked ? 'star' : 'star-outline'}
              size={28}
              color={unlocked ? '#F97316' : '#94a3b8'}
            />
            <View className="ml-3">
              <Text className="text-base font-semibold text-text">{achievement.title}</Text>
              <Text className="text-xs text-slate-500">
                {unlocked ? 'Открыто!' : 'Продолжай учиться, чтобы открыть'}
              </Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}
