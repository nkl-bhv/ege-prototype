import type { SubjectOverview } from '../lib/types'

interface SubjectHeroProps {
  subject: SubjectOverview
}

export function SubjectHero({ subject }: SubjectHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-card">
      <div className="absolute -left-10 top-1/2 hidden h-40 w-40 -translate-y-1/2 rotate-12 bg-secondary/10 blur-3xl md:block" />
      <div className="absolute -right-16 top-6 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
      <div className="relative flex flex-col gap-4">
        <div>
          <p className="text-sm font-semibold text-secondary">{subject.title}</p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">{subject.welcomeText}</h1>
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold">
          <button className="rounded-full bg-neutral-100 px-4 py-2 text-neutral-500 transition hover:bg-neutral-200">
            Теория
          </button>
          <button className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white shadow-soft">
            Практика
          </button>
        </div>
      </div>
    </div>
  )
}
