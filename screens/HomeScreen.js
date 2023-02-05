import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const mail = auth.currentUser?.email; 
  let name = mail.split('@')[0];
  console.log(name);

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut().then(() => navigation.replace('Login'))
    .catch(error => alert.apply(error.message));
  }

  return (
    <View style={styles.container}>
      <View style={styles.contextContainer}>
        <View style={styles.welcome}>
        <Text style={styles.text}>Hi, 
          <Text style={styles.bold}>{name}</Text></Text>
          <Text style={styles.text2}>How is it going today?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#858585',
  },

  contextContainer: {
    flex: 5,
    // marginTop: 20,
    justifyContent: 'center',
  }, 

  welcome: {
    padding: 40,
    borderRadius: 10,
    backgroundColor: '#62c6a1',
  },

  buttonContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#38f309',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  button :{
    backgroundColor: '#ff5555',
    width: '50%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
},

  buttonText:{
      color: '#ffffff',
      fontWeight: '700',
      fontSize: 16,
  },

  text: {
    fontSize: 20,
  },

  text2: {
    marginTop: 10,
    fontSize: 16,
  },

  bold: {
    fontWeight: 'bold',
    color: '#6800a0',
  },
})