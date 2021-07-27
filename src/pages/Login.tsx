import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Container, Input} from '../styles/Container'
import { Image, StyleSheet, View, TextInput, Button } from 'react-native';

export default function Login() {
    const navigation = useNavigation();

    function handleHome(){
        navigation.navigate("Home")
    }
    function handleLogin(){
        navigation.navigate("Login")
    }
    return (
        <Container>
            <View>
                <Image source={{ uri: "https://drive.google.com/file/d/1NlB2uqYorgjy3d3v-ooIDxpWQ0gOOOyX/view?usp=sharing" }}  style={styles.image}/> 
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" value="Senha" />
        <Button
             title="Senha"
             onPress={handleLogin}
        />
        <Button
             title="Login"
             onPress={handleHome}
        />
        </Container>
    )
}
const styles = StyleSheet.create({
    image: {
      width: 350,
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    input: {
        height: 35,
        margin: 10,
        borderWidth: 1,
    },
  });