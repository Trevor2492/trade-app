import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import splash from '../assets/splash.json';

export default function Splash({ navigation }) {

  return (
    <View style={styles.container}>

      <LottieView 
        source={splash} 
        autoPlay 
        loop = {false}
        speed = {.4}
        onAnimationFinish = {() => {
          navigation.navigate('Home')
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
