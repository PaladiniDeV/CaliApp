import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native"
import React from 'react'

const Statics = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.textTres}>-</Text>
                <Text style={styles.text}>ESTÁTICOS</Text>
                <Text style={styles.textTres}>-</Text>
                <Image
                    style={{ width: 200, height: 180 }}
                    source={{uri: 'https://st3.depositphotos.com/1287390/13948/v/380/depositphotos_139487074-stock-illustration-street-workout-silhouettes.jpg?forcejpeg=true'}}/>
                <Text style={styles.textTres}>-</Text>
                <Text style={styles.textDos}>¿QUE ESTÁTICO QUIERES ENTRENAR?</Text>
                <Text style={styles.textTres}>-</Text>

                <View style={styles.btnGroup}> 

                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Handstand')
                    }}>
                    <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'https://i.pinimg.com/originals/ed/89/e3/ed89e385a3b79d00db857f84d6af904e.png'}}/>
                    <Text style={styles.textBtn}> HANDSTAND </Text>
                </Pressable>
        
                <Text style={styles.textTres}>-</Text>
        
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Front')
                    }}>
                    <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'https://i.pinimg.com/564x/67/89/dd/6789ddb5bcbce872cd965638f7d4cba3.jpg'}}/>
                    <Text style={styles.textBtn}>FRONT LEVER</Text>
                </Pressable>

                </View>
        
                <Text style={styles.textTres}>-</Text>

                <View style={styles.btnGroup}> 

                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Back')
                    }}>
                    <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'https://image.shutterstock.com/image-vector/silhouette-boy-doing-side-lever-260nw-1691929507.jpg'}}/>
                    <Text style={styles.textBtn}>HUMAN FLAG</Text>
                </Pressable>

                <Text style={styles.textTres}>-</Text>
        
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Muscleup')
                    }}>
                    <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'https://image.shutterstock.com/image-vector/vector-black-silhouette-two-pull-260nw-1907453194.jpg'}}/>
                    <Text style={styles.textBtn}>  MUSCLE UP  </Text>
                </Pressable>

                </View>

                <Text style={styles.textTres}>-</Text>

                <View style={styles.btnGroup}> 


                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Straddle')
                    }}>
                    <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'data:image/png;base64,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'}}/>
                    <Text style={styles.textBtn}>   STRADDLE   </Text>
                </Pressable>

                <Text style={styles.textTres}>-</Text>

                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Full')
                    }}>
                    <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzyg4cBBKXOkLlwPl9vqPsrQSgJ9wJGBiy-dx8UJXJsCf_vAVkcWS3BHipjgEBQRGtuc&usqp=CAU'}}/>
                    <Text style={styles.textBtn}>FULL PLANCH</Text>
                </Pressable>

                </View>

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
        width:160,
        height:120
    },
  
    textBtn: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
    },
    
    scrollView: {
        backgroundColor: 'black'
    }
  
  });
  
  export default Statics

  /*
  <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Avanzado')
              }}>
              <Image
              style={{ width: 50, height: 50 }}
              source={{uri: 'https://st3.depositphotos.com/1287390/13949/v/600/depositphotos_139496260-stock-illustration-back-lever-exercise.jpg'}}/>
              <Text style={styles.textBtn}>HEFESTO</Text>
          </Pressable>

*/