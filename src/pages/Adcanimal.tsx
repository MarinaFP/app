import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Container, Input} from '../styles/Container'
import { Image, StyleSheet, View, TextInput, Button } from 'react-native';

export default function Adcanimal() {
    const navigation = useNavigation();

    function handleLocalizacao(){
        navigation.navigate("Adicionar animal")
    }
    return (
        <Container>
             <View>
                <Image source={{ uri: "https://drive.google.com/file/d/1own1pI2YhlPFmHyfxHnmaVqQcnkk3H8U/view?usp=sharing" }}  style={styles.image}/> 
            </View>

            <Button
             title="Insira foto"
             onPress={handleLocalizacao}
        />

            <TextInput
                style={styles.input}
                placeholder="Localização do animal"
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone para contato"
            />
            <TextInput
                style={styles.input}
                placeholder="Caracteristicas do animal" /> 
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