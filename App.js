import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [name, onChangeText] = useState('')

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
      />

      <Text>Hello {name}</Text>

      <Button 
        title='Tap Here'
        onPress={() => Alert.alert(name + ' pressed the button')}
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
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: 150,
    margin: 12
  },
});
