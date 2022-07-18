import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import React from 'react'

const Basics = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>BÁSICOS</Text>
        <Text style={styles.textTres}>-</Text>
        <Image
            style={{ width: 200, height: 200 }}
            source={{uri: 'https://i.pinimg.com/564x/be/de/39/bede3937d47e2b71f6423146cc35242f.jpg'}}/>        
        <Text style={styles.textTres}>-</Text>
        <Text style={styles.textDos}>¿CUÁL ES TU NIVEL?</Text>
        <Text style={styles.textTres}>-</Text>

        <Pressable style={styles.button}
            onPress={ () => {
                navigation.navigate('Principiante')
            }}>
            <Text style={styles.textBtn}>PRINCIPIANTE</Text>
        </Pressable>

        <Text style={styles.textTres}>-</Text>

        <Pressable style={styles.button}
            onPress={ () => {
                navigation.navigate('Intermedio')
            }}>
            <Text style={styles.textBtn}>INTERMEDIO</Text>
        </Pressable>

        <Text style={styles.textTres}>-</Text>

        <Pressable style={styles.button}
            onPress={ () => {
                navigation.navigate('Avanzado')
            }}>
            <Text style={styles.textBtn}>AVANZADO</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: 'white',
        fontSize: 32,  
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textDos: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textTres: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },

    textBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

});

export default Basics

