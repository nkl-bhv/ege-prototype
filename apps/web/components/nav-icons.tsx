import { type SVGProps } from 'react'

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10.5V20h5v-4h4v4h5v-9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        d="M17 3H7v3a5 5 0 0 0 5 5 5 5 0 0 0 5-5V3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11v4" strokeLinecap="round" />
      <path d="M9 21h6" strokeLinecap="round" />
      <path d="M17 5h2a2 2 0 0 1 0 4h-2M7 5H5a2 2 0 0 0 0 4h2" strokeLinecap="round" />
    </svg>
  )
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" strokeLinecap="round" />
    </svg>
  )
}
