import { FlameIcon, HeartIcon, StarIcon } from './icons'
import type { MainMenuStats } from '@/lib/types'

interface TopStatusBarProps {
  stats: MainMenuStats
}

export function TopStatusBar({ stats }: TopStatusBarProps) {
  return (
    <div className="flex items-center justify-between rounded-3xl bg-white/70 px-5 py-3 shadow-soft backdrop-blur">
      <div className="flex items-center gap-3 text-sm font-semibold text-neutral-600">
        <StatChip icon={<HeartIcon className="h-4 w-4 text-accent-ruby" />} label={stats.hearts.toString()} />
        <StatChip icon={<StarIcon className="h-4 w-4 text-accent-gold" />} label={`${stats.coins}`} />
        <StatChip icon={<DiamondIcon />} label={`${stats.gems}`} />
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Уровень</span>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
            {stats.level}
          </span>
          <span className="text-xs font-semibold text-neutral-500">{stats.xp} XP</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
          <FlameIcon className="h-4 w-4 text-orange-500" />
          <span>Серия {stats.streak} дн.</span>
        </div>
      </div>
    </div>
  )
}

function StatChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-neutral-600">
      {icon}
      <span>{label}</span>
    </span>
  )
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-secondary">
      <path d="M12 2 4 9l8 13 8-13-8-7Zm0 2.618L17.035 9 12 18.382 6.965 9 12 4.618Z" fill="currentColor" />
    </svg>
  )
}
