import { useMemo, useState } from 'react';

interface PracticeTask2ScreenProps {
  onBack: () => void;
  onNext?: () => void;
}

type ValidationState = {
  firstCorrect: boolean;
  secondCorrect: boolean;
};

const baseInputClass =
  'w-full rounded-2xl border bg-white px-4 py-3 text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-[#5C6BF6]';

const normalizeValue = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ');

export function PracticeTask2Screen({ onBack, onNext }: PracticeTask2ScreenProps) {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const validation: ValidationState = useMemo(() => {
    if (!isChecked) {
      return { firstCorrect: false, secondCorrect: false };
    }
    const firstCorrect = normalizeValue(firstValue) === 'ограниченности';
    const secondCorrect = normalizeValue(secondValue) === 'потребностей';
    return { firstCorrect, secondCorrect };
  }, [firstValue, secondValue, isChecked]);

  const getInputClass = (correct: boolean) => {
    if (!isChecked) return baseInputClass;
    if (correct) return `${baseInputClass} border-green-500 bg-green-50 text-green-700`;
    return `${baseInputClass} border-red-500 bg-red-50 text-red-700`;
  };

  const handleCheck = () => {
    const firstCorrect = normalizeValue(firstValue) === 'ограниченности';
    const secondCorrect = normalizeValue(secondValue) === 'потребностей';
    setIsChecked(true);
    const bothCorrect = firstCorrect && secondCorrect;
    setIsCorrect(bothCorrect);
    if (bothCorrect && onNext) {
      // Button will call onNext via next handler, but we keep correctness state here.
    }
  };

  const canProceed = firstValue.trim().length > 0 && secondValue.trim().length > 0;
  const showSuccess = isChecked && isCorrect;
  const showError = isChecked && !isCorrect;

  return (
    <div className="min-h-screen bg-[#F5FBFF] px-4 py-6">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
        <header className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <div className="text-lg font-semibold text-slate-900">Задание 2</div>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1">
              ⚡<span className="text-[#8DA0B8]">0 XP</span>
            </span>
            <span className="rounded-full bg-[#E6F7EE] px-3 py-1 text-xs font-semibold text-[#0E9F6E]">Уровень 1</span>
          </div>
        </header>

        <div className="h-1.5 w-full rounded-full bg-[#E5E7EB]">
          <div className="h-full w-[70%] rounded-full bg-[#6CC070]" />
        </div>

        <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span className="rounded-full bg-[#FFF2E5] px-3 py-1 text-[#FF7A00]">Вопрос 2/3</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">50 XP · Уровень 1</span>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <p className="text-base font-semibold text-slate-900">Заполните пропуски:</p>
          <p className="mt-3 text-base text-slate-800">
            Экономика решает проблему
            <input
              type="text"
              value={firstValue}
              disabled={showSuccess}
              onChange={(e) => setFirstValue(e.target.value)}
              className={`${getInputClass(validation.firstCorrect)} mt-2 block`}
              placeholder="первый пропуск"
            />
            ресурсов при безграничности
            <input
              type="text"
              value={secondValue}
              disabled={showSuccess}
              onChange={(e) => setSecondValue(e.target.value)}
              className={`${getInputClass(validation.secondCorrect)} mt-2 block`}
              placeholder="второй пропуск"
            />
            .
          </p>

          {showSuccess && <p className="mt-3 text-sm font-semibold text-green-700">Верно! Уровень пройден.</p>}
          {showError && <p className="mt-3 text-sm text-red-600">Проверьте ответы и попробуйте ещё раз.</p>}
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-[#D1D5DB] bg-white py-3 text-base font-semibold text-slate-700 transition-colors hover:border-[#FF7A00] hover:text-[#FF7A00] sm:w-auto sm:px-6"
            onClick={onBack}
          >
            ← Назад
          </button>
          {showSuccess ? (
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#FF7A00] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(255,122,0,0.35)] transition-transform hover:-translate-y-0.5 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00] sm:w-auto"
              onClick={onNext}
            >
              Далее →
            </button>
          ) : (
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#22C55E] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(34,197,94,0.25)] transition-transform hover:-translate-y-0.5 focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] sm:w-auto"
              disabled={!canProceed}
              onClick={handleCheck}
            >
              Проверить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PracticeTask2Screen;
