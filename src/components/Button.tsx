import { Pressable, Text, PressableProps } from 'react-native'
import { ReactNode } from 'react'

interface ButtonProps extends PressableProps {
  title: string
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
}

export function Button({ title, variant = 'primary', icon, disabled, ...props }: ButtonProps) {
  const base =
    'flex-row items-center justify-center rounded-lg border border-transparent px-5 py-3 font-semibold transition active:scale-[0.99]'
  const variants: Record<typeof variant, string> = {
    primary: 'bg-secondary',
    secondary: 'bg-primary',
    ghost: 'border-muted bg-transparent'
  }

  const textColor: Record<typeof variant, string> = {
    primary: 'text-white',
    secondary: 'text-white',
    ghost: 'text-text'
  }

  return (
    <Pressable
      accessibilityRole="button"
      className={`${base} ${variants[variant]} ${disabled ? 'opacity-50' : ''}`}
      disabled={disabled}
      {...props}
    >
      {icon}
      <Text className={`${icon ? 'ml-2' : ''} text-base font-semibold ${textColor[variant]}`}>{title}</Text>
    </Pressable>
  )
}
