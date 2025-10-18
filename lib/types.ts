export type LessonState = 'completed' | 'current' | 'locked'

export interface LessonNode {
  id: string
  title: string
  state: LessonState
  progress: number
  rewardPreview: {
    xp: number
    coins: number
  }
}

export interface MainMenuStats {
  level: number
  xp: number
  dailyGoalProgress: number
  streak: number
  coins: number
  gems: number
  hearts: number
}

export interface AchievementPreview {
  id: string
  title: string
  description: string
}

export interface SubjectOverview {
  id: string
  title: string
  welcomeText: string
  activeTab: 'theory' | 'practice'
  lessons: LessonNode[]
  achievements: AchievementPreview[]
}
