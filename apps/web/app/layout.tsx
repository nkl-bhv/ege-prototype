import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '../styles/globals.css'

const nunito = Nunito({ subsets: ['latin', 'cyrillic'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'ЕГЭ-Прокачка',
  description: 'Готовься к ЕГЭ с ежедневными мини-уроками и прогрессом'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={nunito.variable}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(92,107,246,0.08)_0%,_transparent_55%)]">
          {children}
        </div>
      </body>
    </html>
  )
}
