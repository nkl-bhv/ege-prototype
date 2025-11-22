import ContinueBlock from './components/ContinueBlock';
import DailyGoalCard from './components/DailyGoalCard';
import Layout from './components/Layout';
import ProgressSummary from './components/ProgressSummary';
import { mockProgress } from './data/mockData';

const App = () => {
  return (
    <Layout>
      <ProgressSummary progress={mockProgress} />
      <DailyGoalCard progress={mockProgress} />
      <ContinueBlock progress={mockProgress} />

      <div className="mt-6 flex w-full justify-center">
        <div className="h-1 w-16 rounded-full bg-gray-300" />
      </div>

      <div className="mt-auto flex items-center justify-between rounded-3xl bg-white px-8 py-4 text-sm font-semibold text-gray-500 shadow-lg">
        <div className="flex flex-col items-center text-[#5C6BF6]">
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
    </Layout>
  );
};

export default App;
