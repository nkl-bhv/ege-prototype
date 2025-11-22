export type LessonStatus = 'current' | 'completed' | 'locked';

export interface LessonItem {
  title: string;
  status: LessonStatus;
  note: string;
}

export interface CourseOverview {
  subjectName: string;
  welcomeSubtitle: string;
  level: number;
  xp: number;
  crowns: number;
  energy: number;
  lessons: LessonItem[];
}

export const courseOverview: CourseOverview = {
  subjectName: 'Экономика',
  welcomeSubtitle: 'Добро пожаловать в курс экономики!',
  level: 1,
  xp: 1,
  crowns: 0,
  energy: 0,
  lessons: [
    { title: 'Что такое экономика', status: 'current', note: 'Текущий урок' },
    { title: 'Субъекты экономических отношений', status: 'locked', note: 'Заблокировано' },
    { title: 'Факторы производства', status: 'locked', note: 'Заблокировано' },
    { title: 'Экономические системы', status: 'locked', note: 'Заблокировано' },
    { title: 'Спрос и предложение', status: 'locked', note: 'Заблокировано' },
  ]
};
