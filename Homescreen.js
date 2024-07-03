import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Logo.png')} />
        <Image source={require('./assets/Menu.png')} style={styles.icon} />
        <Image source={require('./assets/shoppingBag.png')} style={styles.icon} />
        <Image source={require('./assets/Search.png')} style={styles.icon} />
      </View>
      <View style={styles.storyContainer}>
        <Text style={styles.text}>OUR STORY</Text>
        <Image source={require('./assets/Filter.png')} style={styles.picture} />
        <Image source={require('./assets/Listview.png')} style={styles.picture} />
      </View>
      <ScrollView>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-1.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>OFFICE WEAR</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-2.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>BLACK</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-3.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>CHURCH WEAR</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-4.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>LAMEREI</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-5.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>21WN</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-6.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>LOPO</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/dress-7.png')} style={styles.dress} />
            <Text style={styles.itemTitle}>21WN</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image source={require('./assets/sundress.jpg')} style={styles.dress} />
            <Text style={styles.itemTitle}>SUNDRESS</Text>
            <Text style={styles.itemDescription}>Reversible Angora Cardigan</Text>
          </View>
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
    width: 50,
    height: 50,
    margin: 5,
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
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  itemContainer: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  dress: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});
