import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Menu.png')} style={styles.icons} />
        <Image source={require('./assets/Logo.png')} />
        <Image source={require('./assets/Search.png')} style={styles.icons} />
        <Image source={require('./assets/shoppingBag.png')} style={styles.icons} />
      </View>
      <View style={styles.imageContainer}>
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
    marginTop:20,
  },
  picture: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight:45,
  },
  text: {
    fontSize: 25,
    fontWeight:'bold',
    marginTop:15,
    marginRight:30,
  },

  icons:{
    marginRight:45,
    marginLeft:15,
  }
});
