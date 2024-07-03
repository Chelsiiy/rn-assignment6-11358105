import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={require('./assets/Menu.png')} style={styles.icon} />
        <Image source={require('./assets/Logo.png')} style={styles.icon} />
        <Image source={require('./assets/shoppingBag.png')} style={styles.icon} />
        <Image source={require('./assets/Search.png')} style={styles.icon} />
      </View>
      <View style={styles.storyContainer}>
        <Text style={styles.text}>OUR STORY</Text>
        <Image source={require('./assets/Filter.png')} style={styles.picture} />
        <Image source={require('./assets/Listview.png')} style={styles.picture} />
      </View>
      <ScrollView>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-1.png')} style={styles.dress} />
          <Text style={styles.itemTitle}>OFFICE WEAR</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-2.png')} style={styles.gown} />
          <Text style={styles.itemTitle}>BLACK</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-3.png')} style={styles.dress} />
          <Text style={styles.itemTitle}>CHURCH WEAR</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-4.png')} style={styles.gown} />
          <Text style={styles.itemTitle}>LAMEREI</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-5.png')} style={styles.dress} />
          <Text style={styles.itemTitle}>21WN</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-6.png')} style={styles.gown} />
          <Text style={styles.itemTitle}>LOPO</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/dress-7.png')} style={styles.dress} />
          <Text style={styles.itemTitle}>21WN</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require('./assets/sundress.jpg')} style={styles.gown} />
          <Text style={styles.itemTitle}>SUNDRESS</Text>
          <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
        </View>
      </ScrollView>
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
    justifyContent: 'center',
    marginTop: 20,
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    margin: 5,
    marginRight:15,
    marginLeft:15,
  },
  picture: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 45,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 30,
  },
  itemContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dress: {
    width: 200,
    height: 250,
    marginRight:250,
  },
  gown:{
    width: 200,
    height: 250,
    marginLeft:200,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});
