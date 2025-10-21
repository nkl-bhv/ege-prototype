import AsyncStorage from '@react-native-async-storage/async-storage'

const BASE_KEY = 'ege-prokachka'

export const storageKeys = {
  store: `${BASE_KEY}:store`
}

export const storage = AsyncStorage

export async function clearAll() {
  const keys = await AsyncStorage.getAllKeys()
  const related = keys.filter((key) => key.startsWith(BASE_KEY))
  if (related.length) {
    await AsyncStorage.multiRemove(related)
  }
}
