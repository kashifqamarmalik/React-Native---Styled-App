import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.tchopa}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={{uri: props.item.thumbnails.w160}}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>{props.item.title}</Text>
                    <Text style={styles.description}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
};



const styles = StyleSheet.create({
  tchopa:{
   paddingRight: 12,
   paddingLeft: 12,
  },
    container: {
      marginTop: 5,
      paddingTop: 10,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'aqua',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      paddingLeft: 15,
      paddingRight:15,
    },

    details: {
      width: '45%',
      flex: 1,
      flexDirection: 'column',
      padding: 10,
    },

    image: {
      width: '20%',
      height: 170,
      flex: 1,
      flexDirection: 'row',
      margin: 10,
     borderRadius: 100,
     paddingLeft: 12,
    },
    title: {
      fontWeight: 'bold',
      paddingLeft: 12,
    },
    description: {
      fontSize: 12,
      paddingLeft: 12,
    },
    
  });

  export default ListItem;