import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";
const Godset = ({ navigation }) => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.textTres}>-</Text>
          <Text style={styles.text}>GOD SET</Text>
          <Image
              style={{ width: 150, height: 150 }}
              source={{uri: 'https://i.pinimg.com/originals/c0/2d/5b/c02d5bdede23b4c36663190e7043604c.png'}}/>
          <Text style={styles.textMotiva}>RUTINAS PARA VERDADEROS CALISTENICOS</Text>
          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('GsUno')
              }}>
              <Text style={styles.nameRoutine}>REPS Y MÁS REPS</Text>
              <Image
                style={{ width: 110, height: 80 }}
                source={{uri: 'https://images.clipartlogo.com/files/istock/previews/9753/97537415-bodybuilding-icon-muscles-vector-illustration.jpg'}}/>
              <Text style={styles.textBtn}>⌚ 45 MIN</Text>
              <Text style={styles.textBtn}>🔥 INTERMEDIO/AVANZADO</Text>
              <Text style={styles.textBtn}>💪 ESPALDA, BRAZOS, HOMBROS</Text>
          </Pressable>
        
          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('GsDos')
              }}>
              <Text style={styles.nameRoutine}>ABS INFERNO</Text>
              <Image
                style={{ width: 100, height: 80 }}
                source={{uri: 'https://img.freepik.com/free-vector/human-abs-vector-cartoon-illustration-clipart_295192-168.jpg?w=360'}}/>
              <Text style={styles.textBtn}>⌚ 45 MIN</Text>
              <Text style={styles.textBtn}>🔥 INTERMEDIO/AVANZADO</Text>
              <Text style={styles.textBtn}>💪 CORE</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('GsTres')
              }}>
              <Text style={styles.nameRoutine}>PIERNAS DE PIEDRA</Text>
              <Image
                style={{ width: 80, height: 80 }}
                source={{uri: 'https://media.istockphoto.com/vectors/vector-image-lower-body-man-the-muscles-of-the-legs-white-background-vector-id941124588?k=20&m=941124588&s=612x612&w=0&h=HtNvdseJLhDRCBu2GvJoVY8ZhrQ6gZPEHJ9zlBzpaKc='}}/>
              <Text style={styles.textBtn}>⌚ 60 MIN</Text>
              <Text style={styles.textBtn}>🔥 INTERMEDIO</Text>
              <Text style={styles.textBtn}>🦵 CUÁDRICEPS, GEMELOS</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('GsCuatro')
              }}>
              <Text style={styles.nameRoutine}>PECHO CBUM</Text>
              <Image
                style={{ width: 110, height: 80 }}
                source={{uri: 'https://media.istockphoto.com/vectors/bodybuilder-vector-id687166234?k=20&m=687166234&s=612x612&w=0&h=3hKwE2iyrYR8kekjiXQnMUydzqiry0HfhtMgiL5kVPY='}}/>
              <Text style={styles.textBtn}>⌚ 45 MIN</Text>
              <Text style={styles.textBtn}>🔥 INTERMEDIO</Text>
              <Text style={styles.textBtn}>💪 PECHO</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('GsCinco')
              }}>
              <Text style={styles.nameRoutine}>FULL BODY CON LASTRE</Text>
              <Image
                style={{ width: 110, height: 80 }}
                source={{uri: 'https://i.etsystatic.com/21481509/r/il/7ce183/3348781371/il_340x270.3348781371_gx78.jpg'}}/>
              <Text style={styles.textBtn}>⌚ 90 MIN</Text>
              <Text style={styles.textBtn}>🔥 EXTREMO</Text>
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

export default Godset