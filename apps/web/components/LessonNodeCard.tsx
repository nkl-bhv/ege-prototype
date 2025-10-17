import { motion } from 'framer-motion'
import clsx from 'clsx'
import { CheckIcon, ChevronRightIcon, LockIcon, PlayIcon } from './icons'
import type { LessonNode } from '../lib/types'

interface LessonNodeCardProps {
  lesson: LessonNode
  index: number
}

export function LessonNodeCard({ lesson, index }: LessonNodeCardProps) {
  const isLocked = lesson.state === 'locked'
  const isCompleted = lesson.state === 'completed'
  const isCurrent = lesson.state === 'current'

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative"
    >
      <div
        className={clsx(
          'relative flex items-center gap-4 rounded-3xl border px-4 py-4 shadow-soft transition-colors',
          isLocked && 'border-transparent bg-white/60 text-neutral-400 backdrop-blur-sm',
          isCurrent && 'border-secondary/40 bg-white text-neutral-900',
          isCompleted && 'border-emerald-400 bg-emerald-50 text-neutral-900'
        )}
      >
        <div
          className={clsx(
            'flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-lg font-bold shadow-sm',
            isLocked && 'border-neutral-200 text-neutral-300',
            isCurrent && 'border-secondary text-secondary',
            isCompleted && 'border-emerald-400 text-emerald-500'
          )}
        >
          {index + 1}
        </div>
        <div className="flex-1">
          <p className="font-semibold leading-tight">{lesson.title}</p>
          <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
            {!isLocked ? (
              <>
                <span>{Math.round(lesson.rewardPreview.xp)} XP</span>
                <span className="text-neutral-300">•</span>
                <span>{lesson.rewardPreview.coins} монет</span>
              </>
            ) : (
              <span>Откроется после {Math.round(lesson.progress * 100)}% прогресса</span>
            )}
          </div>
          {isCurrent && (
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
              <div
                className="h-full rounded-full bg-secondary"
                style={{ width: `${Math.max(lesson.progress * 100, 4)}%` }}
              />
            </div>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100">
          {isLocked ? (
            <LockIcon className="h-5 w-5 text-neutral-300" />
          ) : isCompleted ? (
            <CheckIcon className="h-5 w-5 text-emerald-500" />
          ) : (
            <ChevronRightIcon className="h-5 w-5 text-secondary" />
          )}
        </div>
      </div>
      {isCurrent && (
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
          <div className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground shadow-card">
            Продолжить урок
          </div>
          <PlayIcon className="h-6 w-6 text-secondary" />
        </div>
      )}
    </motion.li>
  )
}
