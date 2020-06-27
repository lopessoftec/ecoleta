import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  // vai dizer o momento que as fotnes parou de ser carregadas
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
      </>
    );
  }
}