import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import { Lesson } from '@/store/useStore'

interface LessonCardProps {
  lesson: Lesson
  onPress?: () => void
  selected?: boolean
}

export function LessonCard({ lesson, onPress, selected }: LessonCardProps) {
  const isLocked = lesson.state === 'locked'
  const isCompleted = lesson.state === 'completed'
  const isCurrent = lesson.state === 'current'

  const containerClasses = [
    'mb-3 rounded-2xl border px-4 py-4',
    isLocked ? 'border-transparent bg-muted opacity-70' : 'border-primary bg-surface shadow-sm',
    selected ? 'ring-2 ring-secondary' : ''
  ].join(' ')

  const iconName = isLocked ? 'lock-closed' : isCompleted ? 'checkmark-circle' : 'play'
  const iconColor = isLocked ? '#94a3b8' : isCompleted ? '#22C55E' : '#F97316'

  return (
    <Pressable className={containerClasses} disabled={isLocked} onPress={onPress}>
      <View className="flex-row items-center justify-between">
        <View className="flex-1 pr-3">
          <Text className="text-sm font-medium text-warning">
            {lesson.isFinal ? 'Итоговый тест' : 'Урок'}
          </Text>
          <Text className="mt-1 text-lg font-semibold text-text">{lesson.title}</Text>
          <Text className="mt-2 text-xs text-slate-500">+{lesson.rewardXP} XP</Text>
        </View>
        <Ionicons name={iconName as any} size={28} color={iconColor} />
      </View>
      {isCurrent && (
        <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <View className="h-full w-1/3 rounded-full bg-secondary" />
        </View>
      )}
    </Pressable>
  )
}
