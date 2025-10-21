import { useState, useEffect } from 'react'
import { ScrollView, Switch, Text, TextInput, View, Alert } from 'react-native'

import { Button } from '@/components/Button'
import { clearAll } from '@/services/storage'
import { useStore } from '@/store/useStore'

export function ProfileScreen() {
  const profile = useStore((state) => state.profile)
  const stats = useStore((state) => state.userStats)
  const updateNickname = useStore((state) => state.updateNickname)
  const updateDailyGoal = useStore((state) => state.updateDailyGoal)
  const setReminderHour = useStore((state) => state.setReminderHour)
  const setRemindersEnabled = useStore((state) => state.setRemindersEnabled)
  const resetProgress = useStore((state) => state.resetProgress)

  const [nickname, setNickname] = useState(profile.nickname)
  const [dailyGoal, setDailyGoal] = useState(String(stats.dailyGoal))
  const [hour, setHour] = useState(String(profile.reminderHour))

  useEffect(() => {
    setNickname(profile.nickname)
    setHour(String(profile.reminderHour))
  }, [profile.nickname, profile.reminderHour])

  useEffect(() => {
    setDailyGoal(String(stats.dailyGoal))
  }, [stats.dailyGoal])

  return (
    <ScrollView className="flex-1 bg-[#f9fafb]" contentContainerStyle={{ padding: 24 }}>
      <Text className="mb-6 text-2xl font-bold text-text">Профиль</Text>

      <View className="mb-6 rounded-2xl bg-surface p-4 shadow-sm">
        <Text className="text-sm font-semibold text-text">Никнейм</Text>
        <TextInput
          value={nickname}
          onChangeText={(value) => {
            setNickname(value)
            updateNickname(value)
          }}
          placeholder="Введите имя"
          className="mt-2 rounded-xl border border-muted bg-white px-3 py-2 text-base"
        />
      </View>

      <View className="mb-6 rounded-2xl bg-surface p-4 shadow-sm">
        <Text className="text-sm font-semibold text-text">Цель дня (XP)</Text>
        <TextInput
          keyboardType="numeric"
          value={dailyGoal}
          onChangeText={(value) => {
            setDailyGoal(value)
            const parsed = parseInt(value, 10)
            if (!Number.isNaN(parsed)) {
              updateDailyGoal(parsed)
            }
          }}
          className="mt-2 rounded-xl border border-muted bg-white px-3 py-2 text-base"
        />
      </View>

      <View className="mb-6 rounded-2xl bg-surface p-4 shadow-sm">
        <Text className="text-sm font-semibold text-text">Напоминания</Text>
        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-base text-text">Получать уведомления</Text>
          <Switch
            value={profile.remindersEnabled}
            onValueChange={(enabled) => setRemindersEnabled(enabled)}
            thumbColor={profile.remindersEnabled ? '#22C55E' : undefined}
          />
        </View>
        <View className="mt-4">
          <Text className="text-sm text-slate-500">Час напоминания (0-23)</Text>
          <TextInput
            keyboardType="numeric"
            value={hour}
            onChangeText={(value) => {
              setHour(value)
              const parsed = parseInt(value, 10)
              if (!Number.isNaN(parsed) && parsed >= 0 && parsed <= 23) {
                setReminderHour(parsed)
              }
            }}
            className="mt-2 rounded-xl border border-muted bg-white px-3 py-2 text-base"
          />
        </View>
      </View>

      <Button
        title="Сбросить прогресс"
        variant="ghost"
        onPress={async () => {
          Alert.alert('Сбросить прогресс', 'Это действие удалит все данные. Продолжить?', [
            {
              text: 'Отмена',
              style: 'cancel'
            },
            {
              text: 'Сбросить',
              style: 'destructive',
              onPress: async () => {
                await clearAll()
                resetProgress()
              }
            }
          ])
        }}
      />
    </ScrollView>
  )
}
