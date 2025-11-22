import { CourseProgress } from '../data/mockData';

interface DailyGoalCardProps {
  progress: CourseProgress;
}

const DailyGoalCard = ({ progress }: DailyGoalCardProps) => {
  const isCompleted = progress.todayCompletedLessons >= progress.dailyGoalLessons;
  const remainingLessons = Math.max(progress.dailyGoalLessons - progress.todayCompletedLessons, 0);

  return (
    <div className="mt-4 rounded-3xl bg-white p-5 shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Цель на сегодня</h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {isCompleted ? 'Выполнено' : 'В процессе'}
        </span>
      </div>

      <p className="text-base font-medium text-gray-900">
        {isCompleted
          ? 'Цель выполнена!'
          : `Пройди ${progress.dailyGoalLessons} урок`}
      </p>
      <p className="mt-2 text-sm text-gray-600">
        {isCompleted
          ? 'Отличная работа! Можно перейти к следующей теме.'
          : `Осталось пройти ${remainingLessons} урок(ов)`}
      </p>
    </div>
  );
};

export default DailyGoalCard;
