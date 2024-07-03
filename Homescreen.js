import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Logo.png')} style={styles.picture} />
        <Image source={require('./assets/Menu.png')} style={styles.picture} />
        <Image source={require('./assets/shoppingBag.png')} style={styles.picture} />
        <Image source={require('./assets/Search.png')} style={styles.picture} />
      </View>
      <View>
        <Text style={styles.text}>OUR STORY</Text>
         <Image source={require('./assets/Filter.png')} style={styles.picture} />
          <Image source={require('./assets/Listview.png')} style={styles.picture} />
      </View>
      <Scrollview vertical>
       <View>
         <Image source={require('./assets/dress-1.png')} style={styles.picture} />
         <Text style={styles.text}>OFFICE WEAR</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
         <View>
         <Image source={require('./assets/dress-2.png')} style={styles.picture} />
         <Text style={styles.text}>BLACK</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
         <View>
         <Image source={require('./assets/dress-3.png')} style={styles.picture} />
         <Text style={styles.text}>CHURCH WEAR</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
         <View>
         <Image source={require('./assets/dress-4.png')} style={styles.picture} />
         <Text style={styles.text}>LAMEREI</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
         <View>
         <Image source={require('./assets/dress-5.png')} style={styles.picture} />
         <Text style={styles.text}>21WN</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
         <View>
         <Image source={require('./assets/dress-6.png')} style={styles.picture} />
         <Text style={styles.text}>LOPO</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
         <View>
         <Image source={require('./assets/dress-7.png')} style={styles.picture} />
         <Text style={styles.text}>21WN</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
       <View>
         <Image source={require('./assets/sundress.jpg')} style={styles.picture} />
         <Text style={styles.text}>SUNDRESS</Text>
          <Text style={styles.text}>reversible angora cardigan</Text>
      </View>
      </Scrollview>
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
