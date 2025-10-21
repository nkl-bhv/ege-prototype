import clsx from 'clsx'
import { LessonNodeCard } from '@/components/LessonNodeCard'
import type { LessonNode } from '@/lib/types'

interface LessonRoadmapProps {
  lessons: LessonNode[]
}

export function LessonRoadmap({ lessons }: LessonRoadmapProps) {
  return (
    <section className="relative rounded-3xl bg-white px-5 pb-8 pt-6 shadow-card">
      <div className="absolute left-10 top-6 bottom-8 w-1 rounded-full bg-neutral-100" aria-hidden />
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-neutral-900">Карта тем</h2>
          <p className="text-sm text-neutral-500">Проходи по порядку и открывай новые темы</p>
        </div>
        <button
          className={clsx(
            'rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-500 transition',
            'hover:border-secondary hover:text-secondary'
          )}
        >
          Справка
        </button>
      </header>
      <ol className="relative flex flex-col gap-6">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="relative pl-10">
            <span
              className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white shadow-soft"
              style={{ background: nodeColor(lesson.state) }}
            />
            <LessonNodeCard lesson={lesson} index={index} />
          </div>
        ))}
      </ol>
    </section>
  )
}

function nodeColor(state: LessonNode['state']) {
  switch (state) {
    case 'completed':
      return 'rgb(52 211 153)'
    case 'current':
      return 'rgb(92 107 246)'
    default:
      return 'rgb(215 223 234)'
  }
}
