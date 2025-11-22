import type { LessonScreenProps } from './types';

const LessonStep1 = ({ onBack, onNext }: LessonScreenProps) => {
  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <div className="text-lg font-semibold text-slate-900">Что такое экономика?</div>
        <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
          <span className="flex items-center gap-1">
            ⚡<span className="text-[#8DA0B8]">0 XP</span>
          </span>
          <span className="rounded-full bg-[#E6F7EE] px-3 py-1 text-xs font-semibold text-[#0E9F6E]">Уровень 1</span>
        </div>
      </header>

      <div className="h-1.5 w-full rounded-full bg-[#E5E7EB]">
        <div className="h-full w-1/4 rounded-full bg-[#6CC070]" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <span className="text-lg" aria-hidden>
              🔔
            </span>
            <span>Определение экономики</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Экономика — это наука о том, как общества используют ограниченные ресурсы для производства товаров и услуг.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          Экономика изучает поведение людей в процессе производства, распределения и потребления.
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-[#D1D5DB] bg-white py-3 text-base font-semibold text-slate-700 transition-colors hover:border-[#FF7A00] hover:text-[#FF7A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00] sm:w-auto sm:px-6"
          onClick={onBack}
        >
          ← Назад
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#6CC070] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(108,192,112,0.25)] transition-transform hover:-translate-y-0.5 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6CC070] sm:w-auto"
          onClick={onNext}
        >
          Далее →
        </button>
      </div>
    </div>
  );
};

export default LessonStep1;
