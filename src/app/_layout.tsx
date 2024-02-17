import '@/styles/globals.css'
import { Slot } from 'expo-router'

import { useFonts } from 'expo-font'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

// import { useColorScheme } from '@/components/useColorScheme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { Loading } from '@/components/loading'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <Slot />
    </GestureHandlerRootView>
  )
}
