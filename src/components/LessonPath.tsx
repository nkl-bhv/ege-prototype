import React from 'react';
import clsx from 'clsx';
import type { CourseOverview, LessonItem } from '../data/mockData';

interface LessonPathProps {
  lessons: CourseOverview['lessons'];
  /** Вызывается при клике по текущему уроку */
  onStartCurrent?: () => void;
}

const getCircleStyles = (status: LessonItem['status']) => {
  switch (status) {
    case 'current':
      return {
        bg: '#FF7A00', // оранжевый — текущий урок
        icon: '📚',
      };
    case 'completed':
      return {
        bg: '#6CC070', // зеленый — завершённый
        icon: '✅',
      };
    default:
      return {
        bg: '#BFCAD6', // серый — заблокирован
        icon: '🔒',
      };
  }
};

export const LessonPath: React.FC<LessonPathProps> = ({ lessons, onStartCurrent }) => {
  return (
    <div className="relative mt-5">
      {/* Вертикальная дорожка */}
      <div
        className="absolute left-[26px] top-6 bottom-6 w-[6px] rounded-full bg-[#6CC070]"
        aria-hidden
      />

      <div className="flex flex-col gap-4">
        {lessons.map((lesson) => {
          const { bg, icon } = getCircleStyles(lesson.status);
          const isCurrent = lesson.status === 'current';

          return (
            <button
              key={lesson.title}
              type="button"
              onClick={isCurrent ? onStartCurrent : undefined}
              className={clsx(
                'relative flex gap-3 rounded-2xl bg-white p-4 text-left',
                'shadow-[0_8px_24px_rgba(0,0,0,0.06)]',
                'transition-transform',
                isCurrent
                  ? 'cursor-pointer hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF7A00]'
                  : 'cursor-default opacity-85'
              )}
            >
              {/* Кружок с иконкой на дорожке */}
              <div className="relative flex flex-col items-center">
                <div
                  className="z-10 flex h-12 w-12 items-center justify-center rounded-full text-xl"
                  style={{ backgroundColor: bg }}
                  aria-label={lesson.note}
                >
                  <span aria-hidden role="img">
                    {icon}
                  </span>
                </div>
              </div>

              {/* Текст урока */}
              <div>
                <p className="text-base font-semibold text-slate-900">{lesson.title}</p>
                <p
                  className={clsx('mt-1 text-sm', {
                    'text-[#FF7A00]': lesson.status === 'current',
                    'text-[#6CC070]': lesson.status === 'completed',
                    'text-[#BFCAD6]': lesson.status === 'locked',
                  })}
                >
                  {lesson.note}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
