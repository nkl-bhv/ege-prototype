import LessonPath from './components/LessonPath';
import Layout from './components/Layout';
import StatusRow from './components/StatusRow';
import { courseOverview } from './data/mockData';

const App = () => {
  return (
    <Layout>
      <StatusRow course={courseOverview} />

      <div className="mt-6 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">{courseOverview.subjectName}</h1>
        <p className="mt-1 text-base text-slate-600">{courseOverview.welcomeSubtitle}</p>
      </div>

      <LessonPath lessons={courseOverview.lessons} />

      <button
        type="button"
        className="mt-6 w-[90%] self-center rounded-[14px] bg-[#FF7A00] py-3 text-lg font-semibold text-white shadow-[0_8px_20px_rgba(255,122,0,0.35)] transition-transform hover:-translate-y-0.5 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
        onClick={() => alert('Здесь будет переход к уроку')}
      >
        Начать урок
      </button>

      <div className="mt-8 flex items-center justify-between rounded-3xl bg-white px-8 py-4 text-sm font-semibold text-gray-600 shadow-lg">
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
    </Layout>
  );
};

export default App;
