import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 


export default function LoginScreen() {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user) {
                navigation.replace("Home");
            }
        })
        return unsubscribe;
    }, [])

    //REGISTER
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered in with: ',user.email);
        }).catch(error => alert(error.message))
    }

    //LOG IN
    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ',user.email);
        }).catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="height">
      <View style={styles.iconContainer}>
      <Ionicons name="person" size={64} color="#55a5ff" />
      </View>
      <View style={styles.inputContainer}>
        {/* <Image source={require('./my-icon.png')} /> */}
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input} >
        </TextInput>

        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry >
        </TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#3f3f3f',
    },

    iconContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },

    inputContainer: {
        width: '70%',
    },

    input :{
        backgroundColor: '#d2d2d2',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },

    buttonContainer :{
        width: '50%',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    button :{
        backgroundColor: '#55a5ff',
        width: '70%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutline :{
        backgroundColor: '#6f6f6f',
        marginTop: 10,
        borderColor: '#55a5ff',
        borderWidth: 4,
    },

    buttonOutlineText :{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },
})