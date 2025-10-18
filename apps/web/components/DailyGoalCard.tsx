import clsx from 'clsx'
import type { MainMenuStats } from '../lib/types'

interface DailyGoalCardProps {
  stats: MainMenuStats
}

export function DailyGoalCard({ stats }: DailyGoalCardProps) {
  const percentage = Math.min(100, Math.round(stats.dailyGoalProgress * 100))
  const goalReached = percentage >= 100

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-primary text-white shadow-card">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-1/3 translate-y-1/3 rounded-full bg-white/20" />
      <div className="relative px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70">Цель дня</p>
            <h2 className="mt-1 text-xl font-extrabold">Набери 50 XP</h2>
          </div>
          <span
            className={clsx(
              'rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide',
              goalReached ? 'bg-white text-secondary' : 'bg-white/20 text-white'
            )}
          >
            {goalReached ? 'Готово!' : `${percentage}%`}
          </span>
        </div>
        <p className="mt-3 text-sm text-white/80">
          Осталось {Math.max(0, 50 - Math.round(stats.dailyGoalProgress * 50))} XP до streak
        </p>
        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/20">
          <div className="h-full rounded-full bg-white" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  )
}
