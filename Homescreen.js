import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
     <Image source={require('./assets/Logo.png')} style={styles.picture} />
     <Image source={require('./assets/Menu.png')} style={styles.picture} />
     <Image source={require('./assets/Filter.png')} style={styles.picture} />
     <Image source={require('./assets/shoppingBag.png')} style={styles.picture} />
     <Image source={require('./assets/Listview.png')} style={styles.picture} />
     <Image source={require('./assets/Search.png')} style={styles.picture} />
    </View>
    <View>
    <Text style={styles.text}> OUR STORY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
