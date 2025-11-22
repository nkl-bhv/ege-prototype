export interface CourseProgress {
  subjectName: string;
  userName: string;
  totalLessons: number;
  completedLessons: number;
  dailyGoalLessons: number;
  todayCompletedLessons: number;
  nextLessonTitle: string;
}

export const mockProgress: CourseProgress = {
  subjectName: 'Обществознание',
  userName: 'Николай',
  totalLessons: 20,
  completedLessons: 5,
  dailyGoalLessons: 1,
  todayCompletedLessons: 0,
  nextLessonTitle: 'Что такое экономика',
};
