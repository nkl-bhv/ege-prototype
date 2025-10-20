import type { Metadata, Viewport } from 'next'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ServiceWorker } from '@/components/ServiceWorker'

export const metadata: Metadata = {
  title: 'ЕГЭ-Прокачка',
  description: 'Готовься к ЕГЭ с ежедневными мини-уроками и прогрессом',
  manifest: '/manifest.webmanifest'
}

export const viewport: Viewport = {
  themeColor: '#5C6BF6'
}

  themeColor: '#5C6BF6',
  manifest: '/manifest.webmanifest'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#5C6BF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <div
          className="min-h-screen"
          style={{
            background: 'radial-gradient(circle at top, rgba(92,107,246,0.08) 0%, transparent 55%)'
          }}
        >
          {children}
        </div>
        <ServiceWorker />
      </body>
    </html>
  )
}
