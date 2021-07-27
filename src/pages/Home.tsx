import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Container, Input} from '../styles/Container'
import { Image, StyleSheet, View, TextInput, Button } from 'react-native';

export default function Home() {
    const navigation = useNavigation();
    function handleLogin(){
        navigation.navigate("Login")
    }
    return (
        <Container>
            <View>
                <Image source={{ uri: "https://images.app.goo.gl/wArTVaEZ1dovhH6W8" }}  style={styles.image}/> 
            </View>
        <Button
             title="Login"
             onPress={handleLogin}
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
    }

});  