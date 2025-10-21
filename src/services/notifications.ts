import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

const REMINDER_ID = 'daily-lesson-reminder'

export async function requestNotificationPermissions() {
  if (Platform.OS === 'web') {
    return false
  }
  const settings = await Notifications.getPermissionsAsync()
  if (settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL) {
    return true
  }
  const response = await Notifications.requestPermissionsAsync()
  return response.granted || response.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
}

export async function scheduleDailyReminder(hour: number) {
  if (Platform.OS === 'web') return false
  const granted = await requestNotificationPermissions()
  if (!granted) return false

  await cancelDailyReminder()

  const trigger: Notifications.DailyTriggerInput = {
    hour,
    minute: 0,
    repeats: true
  }

  await Notifications.scheduleNotificationAsync({
    identifier: REMINDER_ID,
    content: {
      title: 'ЕГЭ Прокачка',
      body: 'Пора пройти новый урок!'
    },
    trigger
  })
  return true
}

export async function cancelDailyReminder() {
  if (Platform.OS === 'web') return
  const scheduled = await Notifications.getAllScheduledNotificationsAsync()
  await Promise.all(
    scheduled
      .filter((item) => item.identifier === REMINDER_ID)
      .map((item) => Notifications.cancelScheduledNotificationAsync(item.identifier))
  )
}
