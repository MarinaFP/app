import React from 'react'
import { Container} from '../styles/Container'
import { Image, StyleSheet, View, TextInput } from 'react-native';

export default function Localizacao() {
    return (
        <Container>
            <View>
                <Image source={{ uri: "https://drive.google.com/file/d/1UMZ1Kum5cv989MXUGM2FXTpQq-HXrpMg/view?usp=sharing" }}  style={styles.image}/> 
            </View>

            <TextInput
                style={styles.input}
                placeholder="Procurar"
            />
            <TextInput
                style={styles.input}
                placeholder="Adicionar"
            />
            <TextInput
                style={styles.input}
                placeholder="Ative sua localização"
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