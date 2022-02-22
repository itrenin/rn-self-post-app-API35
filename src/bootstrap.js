import * as Font from 'expo-font'
import { DB } from './store/db'

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    })
    await DB.init()
  } catch (e) {
    console.error(e)
  }
}
