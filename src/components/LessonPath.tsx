import clsx from 'clsx';
import { CourseOverview, LessonItem } from '../data/mockData';

interface LessonPathProps {
  lessons: CourseOverview['lessons'];
  onStartCurrent?: () => void;
}

const getCircleStyles = (status: LessonItem['status']) => {
  switch (status) {
    case 'current':
      return {
        bg: 'bg-[#FF7A00]',
        icon: '📘',
      };
    case 'completed':
      return {
        bg: 'bg-[#6CC070]',
        icon: '✅',
      };
    default:
      return {
        bg: 'bg-[#BFCAD6]',
        icon: '🔒',
      };
  }
};

const LessonPath = ({ lessons, onStartCurrent }: LessonPathProps) => {
  return (
    <div className="relative mt-5">
      <div className="absolute left-[26px] top-6 bottom-6 w-[6px] rounded-full bg-[#6CC070]" aria-hidden />
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
                'relative flex gap-3 rounded-2xl bg-white p-4 text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform',
                {
                  'cursor-pointer hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]':
                    isCurrent,
                  'cursor-default': !isCurrent,
                },
              )}
            >
              <div className="flex flex-col items-center">
                <div
                  className={clsx(
                    'z-10 flex h-12 w-12 items-center justify-center rounded-full text-xl text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
                    bg,
                  )}
                  aria-label={lesson.note}
                >
                  <span aria-hidden role="img">
                    {icon}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">{lesson.title}</p>
                <p
                  className={clsx('text-sm', {
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

export default LessonPath;
