import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Routes from './src/routes';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  
  const loadFonts = async () => {
    await Font.loadAsync({
      'SFProDisplay-Black': {
        uri: require('./assets/fonts/SFProDisplay-Black.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'SFProDisplay-Bold': {
        uri: require('./assets/fonts/SFProDisplay-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'SFProDisplay-Medium': {
        uri: require('./assets/fonts/SFProDisplay-Medium.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'SFProDisplay-Regular': {
        uri: require('./assets/fonts/SFProDisplay-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'SFProDisplay-Semibold': {
        uri: require('./assets/fonts/SFProDisplay-Semibold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setTimeout(() => setLoaded(true), 1000);
  }

  useEffect(() => {
    loadFonts();
  }, [])
  
  return (
    loaded ? (
      <Routes />
    ) : (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#452a7c" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
