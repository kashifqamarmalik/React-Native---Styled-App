import React from 'react';
import {StyleSheet, Text, View, FlatList,TouchableOpacity, Image, StatusBar} from 'react-native';
import List from './components/List.js'
import Constants from 'expo-constants';
import {Header} from 'react-native/Libraries/NewAppScreen';



const mediaArray = [
  {
    'key': '0',
    'title': 'Johny',
    'description': 'Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Maddy',
    'description': 'Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Catty',
    'description': 'Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];





const App = () => {
  return (
    
    <View style={{alignItems: 'stretch'}}>
      
    <StatusBar backgroundColor="red" barStyle="light-content" />
    <Image 
      style={styles.image}
      source={require('./image/1.jpg')}/>
      
      <Text style={styles.headerText}>Cat Planet</Text>
      
      <List mediaArray={mediaArray} />
      
      </View>
  );
};



const styles = StyleSheet.create({

  image: {
    width: 450,
    height: 225,
    alignSelf: 'stretch',
  },

  headerText: {
    flex: 1,
    fontSize: 23,
    fontWeight: 'bold',
    position: "absolute",
    right: 275,
    top: 160,
    backgroundColor: 'rgba(0, 255, 255, 0.4)',
    width: '30%',
    textAlign: "center",
    elevation: 2,
    color:'black'
  },
});


export default App;