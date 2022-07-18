import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native"
import React from 'react'

const Deasfio = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.textTres}>-</Text>
      <Text style={styles.text}>DESAFIOS</Text>
      <Image
          style={{ width: 150, height: 150 }}
          source={{uri: 'https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-bar-chart-icon-for-your-project-png-image_1600080.jpg'}}/>
      <Text style={styles.textMotiva}>SUPERATE CADA DÍA MÁS CON NUESTROS DESAFIOS</Text>
      <Text style={styles.textTres}>-</Text>

      <Pressable style={styles.button}
          onPress={ () => {
              navigation.navigate('Godone')
          }}>
          <Text style={styles.nameRoutine}>TABLETA DE CHOCOLATE 🍫</Text>
          <Image
            style={{ width: 110, height: 80 }}
            source={{uri: 'https://img.freepik.com/free-vector/human-abs-vector-cartoon-illustration-clipart_295192-168.jpg?w=360'}}/>
          <Text style={styles.textBtn}>⌚ 21 DIAS</Text>
          <Text style={styles.textBtn}>🔥 INTERMEDIO</Text>
          <Text style={styles.textBtn}>💪 CORE</Text>
      </Pressable>
    
      <Text style={styles.textTres}>-</Text>
    
      <Pressable style={styles.button}
          onPress={ () => {
              navigation.navigate('Godtwo')
          }}>
          <Text style={styles.nameRoutine}>PIERNAS COMO ROCAS 🗿</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{uri: 'https://media.istockphoto.com/vectors/vector-image-lower-body-man-the-muscles-of-the-legs-white-background-vector-id941124588?k=20&m=941124588&s=612x612&w=0&h=HtNvdseJLhDRCBu2GvJoVY8ZhrQ6gZPEHJ9zlBzpaKc='}}/>
          <Text style={styles.textBtn}>⌚ 25 DIAS</Text>
          <Text style={styles.textBtn}>🔥 INTERMEDIO</Text>
          <Text style={styles.textBtn}>🦵 PIERNAS Y GLUTEOS</Text>
      </Pressable>

      <Text style={styles.textTres}>-</Text>
    
      <Pressable style={styles.button}
          onPress={ () => {
              navigation.navigate('Godtwo')
          }}>
          <Text style={styles.nameRoutine}>BRAZOS DE ACERO 🧨</Text>
          <Image
            style={{ width: 80, height: 80 }}
            source={{uri: 'https://images.emojiterra.com/google/android-11/512px/1f9be.png'}}/>
          <Text style={styles.textBtn}>⌚ 21 DIAS</Text>
          <Text style={styles.textBtn}>🔥 INTERMEDIO</Text>
          <Text style={styles.textBtn}>💪 BÍCEPS, TRÍCEPS, HOMBROS</Text>
      </Pressable>

      <Text style={styles.textTres}>-</Text>
    
        <Pressable style={styles.button}
            onPress={ () => {
                navigation.navigate('Godtwo')
            }}>
            <Text style={styles.nameRoutine}>PINO EN UN MES ⌛</Text>
            <Image
            style={{ width: 110, height: 100 }}
            source={{uri: 'https://static.thenounproject.com/png/1873263-200.png'}}/>
            <Text style={styles.textBtn}>⌚ 30 DIAS</Text>
            <Text style={styles.textBtn}>🔥 INTERMEDIO</Text>
            <Text style={styles.textBtn}>💪 FULL BODY</Text>
        </Pressable>

        <Text style={styles.textTres}>-</Text>

    </View>
    
  </ScrollView>
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
        width:300,
        height:200
    },
  
    textBtn: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.15,
        color: 'black',
    },
  
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
    },
    
    scrollView: {
        backgroundColor: 'black'
    }, 
  
    nameRoutine: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.15,
        color: 'red'
    },

    textMotiva: {
        color: 'red',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingHorizontal: 23,
        paddingVertical: 12,
    },
    
  
  });

export default Deasfio