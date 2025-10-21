declare module 'nativewind' {
  export function styled<T>(component: T, options?: Record<string, unknown>): T
  export type VariantProps<T> = T extends (...args: any[]) => infer R ? R : never
}

declare module 'react-native' {
  interface ViewProps {
    className?: string
  }

  interface TextProps {
    className?: string
  }

  interface PressableProps {
    className?: string
  }

  interface ScrollViewProps {
    className?: string
  }
}
