import React from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { Anton_400Regular } from '@expo-google-fonts/anton';
import { Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
    Anton_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
