import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import Home from './src/screens/Home';

const App = () => {
  const [isLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!isLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <Home />
      <StatusBar style='light' />
    </>
  )
}

export default App;
