import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Homescreen from './Homescreen';
import Cart from './Cart';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Card>
      </Card>
      <Homescreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
