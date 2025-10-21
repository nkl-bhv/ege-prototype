import { BottomNav } from '@/components/BottomNav'
import { DailyGoalCard } from '@/components/DailyGoalCard'
import { LessonRoadmap } from '@/components/LessonRoadmap'
import { SubjectHero } from '@/components/SubjectHero'
import { TopStatusBar } from '@/components/TopStatusBar'
import { mockStats, mockSubject } from '@/lib/mock-data'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-4 pb-24 pt-6 sm:px-6">
      <TopStatusBar stats={mockStats} />
      <DailyGoalCard stats={mockStats} />
      <SubjectHero subject={mockSubject} />
      <LessonRoadmap lessons={mockSubject.lessons} />
      <BottomNav />
    </main>
  )
}
