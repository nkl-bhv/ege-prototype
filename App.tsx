import 'react-native-gesture-handler'
import 'react-native-reanimated'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import { AchievementsScreen } from '@/screens/AchievementsScreen'
import { HomeScreen } from '@/screens/HomeScreen'
import { LessonScreen } from '@/screens/LessonScreen'
import { ProfileScreen } from '@/screens/ProfileScreen'
import { cancelDailyReminder, scheduleDailyReminder } from '@/services/notifications'
import { TabsParamList, RootStackParamList } from '@/navigation/types'
import { useStore } from '@/store/useStore'

const Tab = createBottomTabNavigator<TabsParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
          paddingHorizontal: 24,
          paddingBottom: 8,
          height: 72
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: 'home',
            Achievements: 'trophy',
            Profile: 'person'
          }
          const iconName = icons[route.name]
          return <Ionicons name={iconName} size={size} color={focused ? '#F97316' : color} />
        },
        tabBarActiveTintColor: '#F97316',
        tabBarInactiveTintColor: '#94a3b8'
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Achievements" component={AchievementsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const hydrated = useStore((state) => state.hydrated)
  const remindersEnabled = useStore((state) => state.profile.remindersEnabled)
  const reminderHour = useStore((state) => state.profile.reminderHour)
  const refreshDailyProgress = useStore((state) => state.refreshDailyProgress)
  const setHydrated = useStore((state) => state.setHydrated)
  const recordEvent = useStore((state) => state.recordEvent)

  useEffect(() => {
    const unsubscribe = useStore.persist.onFinishHydration(() => {
      setHydrated(true)
      recordEvent('app_open')
    })

    if (useStore.persist.hasHydrated()) {
      setHydrated(true)
      recordEvent('app_open')
    }

    return () => {
      unsubscribe?.()
    }
  }, [recordEvent, setHydrated])

  useEffect(() => {
    if (!hydrated) return
    refreshDailyProgress()
    if (remindersEnabled) {
      scheduleDailyReminder(reminderHour)
    } else {
      cancelDailyReminder()
    }
  }, [hydrated, remindersEnabled, reminderHour, refreshDailyProgress])

  if (!hydrated) {
    return (
      <View className="flex-1 items-center justify-center bg-[#f9fafb]">
        <ActivityIndicator size="large" color="#F97316" />
      </View>
    )
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsNavigator} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
