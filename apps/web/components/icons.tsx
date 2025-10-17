import { type SVGProps } from 'react'

export function FlameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        d="M12 2s2.5 3 2.5 5.5S12 11 12 11s-2-1.5-2-3.5S12 2 12 2Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M12 22c3.314 0 6-2.686 6-6 0-2.014-1.035-3.799-2.624-4.854a.75.75 0 0 0-.878.077c-.91.802-2.124 1.277-3.498 1.277-1.374 0-2.588-.475-3.498-1.277a.75.75 0 0 0-.878-.077C7.035 12.201 6 13.986 6 16c0 3.314 2.686 6 6 6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        d="M12 20.5 4.53 13.03a4.5 4.5 0 0 1 6.364-6.364L12 7.773l1.106-1.106a4.5 4.5 0 0 1 6.364 6.364L12 20.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        d="m12 3.5 2.09 4.236 4.677.68-3.384 3.297.8 4.662L12 14.75l-4.183 2.225.8-4.662-3.384-3.297 4.677-.68L12 3.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="4" y="8" width="12" height="9" rx="2" />
      <path d="M7 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      <circle cx="10" cy="12.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="m4.5 10.5 3.5 3.5 7.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="m7.5 4.5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m9 6 10 6-10 6V6Z" />
    </svg>
  )
}
