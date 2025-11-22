import type { LessonScreenProps } from './types';

const LessonIntro = ({ onBack, onNext }: LessonScreenProps) => {
  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <div className="text-lg font-semibold text-slate-900">Что такое экономика</div>
        <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
          <span className="flex items-center gap-1">
            ⚡<span className="text-[#8DA0B8]">0 XP</span>
          </span>
          <span className="rounded-full bg-[#E6F7EE] px-3 py-1 text-xs font-semibold text-[#0E9F6E]">Уровень 1</span>
        </div>
      </header>

      <div className="h-1.5 w-full rounded-full bg-[#E5E7EB]">
        <div className="h-full w-0 rounded-full bg-[#6CC070]" />
      </div>

      <div className="rounded-2xl bg-white p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3E8] text-2xl text-[#FF7A00]">
          📈
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">Что такое экономика</h2>
        <p className="mt-2 text-sm text-slate-500">0% завершено</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFF3E8] px-3 py-1 text-xs font-semibold text-[#FF7A00]">
          <span aria-hidden>🎯</span>
          <span>Ваш первый урок</span>
        </div>
        <button
          type="button"
          className="mt-5 w-full rounded-[14px] bg-[#FF7A00] py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(255,122,0,0.35)] transition-transform hover:-translate-y-0.5 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
          onClick={onNext}
        >
          Начать урок
        </button>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-[#D1D5DB] bg-white py-3 text-base font-semibold text-slate-700 transition-colors hover:border-[#FF7A00] hover:text-[#FF7A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
        onClick={onBack}
      >
        ← К карте уроков
      </button>
    </div>
  );
};

export default LessonIntro;
