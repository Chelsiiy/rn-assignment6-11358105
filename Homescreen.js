import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Menu.png')} style={styles.picture} />
        <Image source={require('./assets/Logo.png')} style={styles.picture} />
        <Image source={require('./assets/Search.png')} style={styles.picture} />
        <Image source={require('./assets/shoppingBag.png')} style={styles.picture} />
      </View>
      <View>
        <Text style={styles.text}>OUR STORY</Text>
         <Image source={require('./assets/Filter.png')} style={styles.picture} />
          <Image source={require('./assets/Listview.png')} style={styles.picture} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  picture: {
    width: 50,
    height: 50,
    margin: 5,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
