import { CourseProgress } from '../data/mockData';

interface ContinueBlockProps {
  progress: CourseProgress;
}

const ContinueBlock = ({ progress }: ContinueBlockProps) => {
  const handleClick = () => {
    alert('Здесь будет переход к уроку');
  };

  return (
    <div className="mt-4 rounded-3xl bg-white p-5 shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Продолжить</h2>
        <span className="text-sm font-medium text-[#5C6BF6]">Учиться</span>
      </div>
      <p className="text-sm text-gray-600">Следующий урок:</p>
      <p className="text-base font-semibold text-gray-900">{progress.nextLessonTitle}</p>

      <button
        type="button"
        onClick={handleClick}
        className="mt-4 w-full rounded-2xl bg-[#5C6BF6] px-4 py-3 text-center text-base font-semibold text-white shadow-sm transition hover:brightness-110"
      >
        Начать урок
      </button>
    </div>
  );
};

export default ContinueBlock;
