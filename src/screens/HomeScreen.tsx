import ContinueBlock from '../components/ContinueBlock';
import DailyGoalCard from '../components/DailyGoalCard';
import ProgressSummary from '../components/ProgressSummary';
import { mockProgress } from '../data/mockData';

interface HomeScreenProps {
  onStartLesson: () => void;
}

export function HomeScreen({ onStartLesson }: HomeScreenProps) {
  return (
    <div className="flex flex-col gap-4">
      <ProgressSummary progress={mockProgress} />
      <DailyGoalCard progress={mockProgress} />
      <ContinueBlock progress={mockProgress} onStartLesson={onStartLesson} />

      <div className="mt-4 flex items-center justify-between rounded-3xl bg-white px-8 py-4 text-sm font-semibold text-gray-600 shadow-lg">
        <div className="flex flex-col items-center text-[#FF7A00]">
          <span className="text-base">🏠</span>
          <span>Домой</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base">📚</span>
          <span>Темы</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base">👤</span>
          <span>Профиль</span>
        </div>
      </div>
    </div>
  );
}
