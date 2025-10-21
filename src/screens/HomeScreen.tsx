import { Ionicons } from '@expo/vector-icons'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ScrollView, Text, View } from 'react-native'

import { Button } from '@/components/Button'
import { LessonCard } from '@/components/LessonCard'
import { TabsParamList, RootStackParamList } from '@/navigation/types'
import { useStore } from '@/store/useStore'

import type { Lesson } from '@/store/useStore'

type HomeNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

function getCurrentLesson(lessons: Lesson[], selectedId: string) {
  return lessons.find((lesson) => lesson.id === selectedId) ?? lessons[0]
}

export function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>()
  const lessons = useStore((state) => state.lessons)
  const selectedLessonId = useStore((state) => state.selectedLessonId)
  const selectLesson = useStore((state) => state.selectLesson)
  const stats = useStore((state) => state.userStats)
  const profile = useStore((state) => state.profile)

  const selectedLesson = getCurrentLesson(lessons, selectedLessonId)
  const canStart = selectedLesson?.state === 'current'
  const remaining = Math.max(0, stats.dailyGoal - stats.todayXP)
  const dailyProgress = stats.dailyGoal > 0 ? Math.min(100, Math.round((stats.todayXP / stats.dailyGoal) * 100)) : 0

  return (
    <View className="flex-1 bg-[#f9fafb]">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 120 }}>
        <View className="mb-6">
          <Text className="text-sm text-slate-500">Экономика</Text>
          <Text className="mt-1 text-2xl font-bold text-text">Добро пожаловать на курс!</Text>
        </View>

        <View className="mb-6 rounded-2xl bg-surface p-4 shadow-sm">
          <View className="flex-row items-center justify-between">
            <StatChip icon="flash-outline" label={`${stats.xp} XP`} />
            <StatChip icon="trophy-outline" label={`${stats.coins} монет`} />
            <StatChip icon="diamond-outline" label={`${stats.gems} гемов`} />
          </View>
          <View className="mt-4 rounded-xl bg-muted px-4 py-3">
            <Text className="text-xs uppercase text-slate-500">Уровень</Text>
            <Text className="mt-1 text-lg font-semibold text-text">{stats.level}</Text>
          </View>
        </View>

        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-text">Карта уроков</Text>
          <Text className="text-xs text-slate-500">Цель дня: {stats.dailyGoal} XP</Text>
        </View>

        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            selected={lesson.id === selectedLesson?.id}
            onPress={() => selectLesson(lesson.id)}
          />
        ))}

        <View className="mt-6 rounded-2xl bg-surface p-4 shadow-sm">
          <Text className="text-base font-semibold text-text">Прогресс дня</Text>
          <Text className="mt-2 text-sm text-slate-500">
            {remaining > 0 ? `Осталось ${remaining} XP до цели` : 'Дневная цель выполнена!'}
          </Text>
          <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <View
              className="h-full rounded-full bg-secondary"
              style={{ width: `${dailyProgress}%` }}
            />
          </View>
        </View>

        <View className="mt-6 rounded-2xl border border-dashed border-warning p-4">
          <Text className="text-sm font-semibold text-warning">Привет, {profile.nickname}!</Text>
          <Text className="mt-1 text-sm text-slate-500">
            Поддерживай серию: {stats.streak} {stats.streak === 1 ? 'день' : 'дней'} подряд.
          </Text>
        </View>
      </ScrollView>

      <View className="absolute bottom-8 left-0 right-0 px-6">
        <Button
          title={canStart ? 'Начать урок' : 'Выбери активный урок'}
          disabled={!canStart}
          onPress={() => {
            if (selectedLesson) {
              navigation.navigate('Lesson', { lessonId: selectedLesson.id })
            }
          }}
          icon={<Ionicons name="play" size={18} color="#fff" />}
        />
      </View>
    </View>
  )
}

function StatChip({ icon, label }: { icon: keyof typeof Ionicons.glyphMap; label: string }) {
  return (
    <View className="flex-row items-center rounded-full bg-muted px-3 py-1">
      <Ionicons name={icon} size={16} color="#F97316" />
      <Text className="ml-2 text-xs font-semibold text-text">{label}</Text>
    </View>
  )
}
