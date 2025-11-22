import { CourseOverview } from '../data/mockData';

interface StatusRowProps {
  course: CourseOverview;
}

const StatusRow = ({ course }: StatusRowProps) => {
  const items = [
    { label: 'XP', value: course.xp, icon: '⭐' },
    { label: 'Короны', value: course.crowns, icon: '👑' },
    { label: 'Энергия', value: course.energy, icon: '⚡' },
  ];

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
      <div className="flex flex-1 gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span aria-hidden className="text-lg" role="img">
              {item.icon}
            </span>
            <span>
              {item.value}
              <span className="ml-1 text-xs font-normal text-slate-500">{item.label}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="rounded-full bg-[#E6F2FF] px-3 py-1 text-xs font-semibold text-[#0E9F6E]">
        Уровень {course.level}
      </div>
    </div>
  );
};

export default StatusRow;
