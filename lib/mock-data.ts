import type { SubjectOverview, MainMenuStats } from './types'

export const mockStats: MainMenuStats = {
  level: 1,
  xp: 125,
  dailyGoalProgress: 0.62,
  streak: 2,
  coins: 100,
  gems: 5,
  hearts: 1
}

export const mockSubject: SubjectOverview = {
  id: 'econ',
  title: 'Экономика',
  welcomeText: 'Добро пожаловать на курс! Продолжай — и ты быстро выйдешь на новый уровень.',
  activeTab: 'practice',
  achievements: [
    { id: 'first-step', title: 'Первый шаг', description: 'Пройди первый урок' },
    { id: 'sharp-shooter', title: 'Снайпер', description: '10 правильных подряд' }
  ],
  lessons: [
    {
      id: 'econ_intro_01',
      title: 'Что такое экономика',
      state: 'current',
      progress: 0.45,
      rewardPreview: { xp: 70, coins: 7 }
    },
    {
      id: 'econ_intro_02',
      title: 'Субъекты экономических отношений',
      state: 'locked',
      progress: 0,
      rewardPreview: { xp: 80, coins: 8 }
    },
    {
      id: 'econ_intro_03',
      title: 'Факторы производства',
      state: 'locked',
      progress: 0,
      rewardPreview: { xp: 90, coins: 9 }
    },
    {
      id: 'econ_intro_04',
      title: 'Экономические системы',
      state: 'locked',
      progress: 0,
      rewardPreview: { xp: 90, coins: 9 }
    },
    {
      id: 'econ_intro_final',
      title: 'Рынок и рыночный механизм',
      state: 'locked',
      progress: 0,
      rewardPreview: { xp: 110, coins: 11 }
    },
    {
      id: 'econ_exam',
      title: 'Итоговый тест',
      state: 'locked',
      progress: 0,
      rewardPreview: { xp: 150, coins: 15 }
    }
  ]
}
