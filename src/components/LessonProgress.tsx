import { View, Text } from 'react-native'

interface LessonProgressProps {
  current: number
  total: number
}

export function LessonProgress({ current, total }: LessonProgressProps) {
  const percentage = total === 0 ? 0 : Math.round(((current + 1) / total) * 100)
  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-medium text-text">Прогресс</Text>
        <Text className="text-sm font-semibold text-secondary">{percentage}%</Text>
      </View>
      <View className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
        <View className="h-full rounded-full bg-secondary" style={{ width: `${percentage}%` }} />
      </View>
    </View>
  )
}
