import { useEffect, useRef, useState } from 'react';

interface PracticeTask1ScreenProps {
  onBack: () => void;
  onNext?: () => void;
}

type OptionKey = 'A' | 'B' | 'C' | 'D';

type IntervalHandle = ReturnType<typeof setInterval> | null;

const options: { key: OptionKey; label: string; text: string }[] = [
  { key: 'A', label: 'A', text: 'Природные явления' },
  { key: 'B', label: 'B', text: 'Поведение людей в хозяйственной деятельности' },
  { key: 'C', label: 'C', text: 'Исторические события' },
  { key: 'D', label: 'D', text: 'Химические процессы' },
];

export function PracticeTask1Screen({ onBack, onNext }: PracticeTask1ScreenProps) {
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);
  const [checkedOption, setCheckedOption] = useState<OptionKey | null>(null);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const timerRef = useRef<IntervalHandle>(null);

  useEffect(() => {
    if (isCorrect || isFailed || timeLeft <= 0) {
      return undefined;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          if (!isCorrect) {
            setIsFailed(true);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCorrect, isFailed, timeLeft]);

  const handleSelect = (option: OptionKey) => {
    if (isCorrect || isFailed || timeLeft === 0) return;
    setSelectedOption(option);
  };

  const handleCheck = () => {
    if (!selectedOption || isCorrect || isFailed || timeLeft === 0) return;

    const right = selectedOption === 'B';
    setCheckedOption(selectedOption);

    if (right) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setIsCorrect(true);
    } else {
      const nextAttempts = attemptsLeft - 1;
      setAttemptsLeft(nextAttempts);
      if (nextAttempts <= 0) {
        setIsFailed(true);
      }
    }
  };

  const feedbackMessage = () => {
    if (isCorrect) {
      return { text: 'Верно! Уровень пройден.', className: 'text-green-700' };
    }
    if (isFailed && timeLeft === 0) {
      return { text: 'Время вышло. Уровень не пройден. Правильный ответ: B', className: 'text-orange-600' };
    }
    if (isFailed) {
      return { text: 'Уровень не пройден. Правильный ответ: B', className: 'text-red-600' };
    }
    if (checkedOption && !isCorrect) {
      return {
        text: `Неверно. Попробуй ещё раз. Осталось ${attemptsLeft} попыт${attemptsLeft === 1 ? 'ка' : 'ки'}`,
        className: 'text-red-600',
      };
    }
    return null;
  };

  const getOptionClasses = (key: OptionKey) => {
    const base = 'w-full rounded-2xl border bg-white px-4 py-3 text-left text-base font-medium transition';
    const isSelected = selectedOption === key;
    const isChecked = checkedOption === key;
    const isCorrectOption = key === 'B';

    if ((isCorrect || isFailed) && isCorrectOption) {
      return `${base} border-green-500 bg-green-50 text-green-700`;
    }

    if (isChecked && !isCorrect && !isFailed && !isCorrectOption) {
      return `${base} border-red-500 bg-red-50 text-red-700`;
    }

    if (isSelected && !isCorrect && !isFailed) {
      return `${base} border-[#5C6BF6] bg-[#EEF2FF]`;
    }

    return base;
  };

  const message = feedbackMessage();

  return (
    <div className="min-h-screen bg-[#F5FBFF] px-4 py-6">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
        <header className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <div className="text-lg font-semibold text-slate-900">Задание 1</div>
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
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Вопрос 1/3</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">{timeLeft} сек</span>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <p className="text-base font-semibold text-slate-900">Что изучает экономика как наука?</p>
          {message && <p className={`mt-2 text-sm ${message.className}`}>{message.text}</p>}
        </div>

        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              className={getOptionClasses(option.key)}
              onClick={() => handleSelect(option.key)}
              disabled={isCorrect || isFailed || timeLeft === 0}
            >
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF2FF] text-sm font-semibold text-[#5C6BF6]">
                {option.label}
              </span>
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-[#D1D5DB] bg-white py-3 text-base font-semibold text-slate-700 transition-colors hover:border-[#FF7A00] hover:text-[#FF7A00] sm:w-auto sm:px-6"
            onClick={onBack}
          >
            ← Назад
          </button>

          {isCorrect ? (
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
              disabled={!selectedOption || isFailed || isCorrect || timeLeft === 0}
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
