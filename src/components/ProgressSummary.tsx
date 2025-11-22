import { CourseProgress } from '../data/mockData';

interface ProgressSummaryProps {
  progress: CourseProgress;
}

const ProgressSummary = ({ progress }: ProgressSummaryProps) => {
  const completionPercent = Math.min(
    100,
    Math.round((progress.completedLessons / progress.totalLessons) * 100),
  );

  return (
    <div className="rounded-3xl bg-white px-5 py-6 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">Привет, {progress.userName}!</p>
          <h1 className="text-2xl font-semibold leading-tight">{progress.subjectName}</h1>
        </div>
        <div className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
          Курс
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Завершено {progress.completedLessons} из {progress.totalLessons} уроков
      </p>

      <div className="mt-3 h-3 w-full rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-[#5C6BF6]"
          style={{ width: `${completionPercent}%` }}
          aria-label={`Прогресс: ${completionPercent}%`}
        />
      </div>
    </div>
  );
};

export default ProgressSummary;
