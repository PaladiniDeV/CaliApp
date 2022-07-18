import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";
const GsTres = ({ navigation }) => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.text}>PIERNAS DE PIEDRA</Text>
            <Text style={styles.textTres}>-</Text>
            <Image
                style={{ width: 275, height: 250 }}
                source={{uri: 'https://static.wixstatic.com/media/e7474c_62c73c1e26ee4cf690afb4ccf0ed3750~mv2.jpg/v1/fill/w_1000,h_834,al_c,q_90/e7474c_62c73c1e26ee4cf690afb4ccf0ed3750~mv2.jpg'}}/>
            
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.textCaract}>CARACTERÍSTICAS:</Text>

            <View
                style={{
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 50,
                }}>
                <Text style={styles.textMotiva}>⌚ 60 MIN</Text>
                <Text style={styles.textMotiva}>🔥 INTERMEDIO</Text>
                <Text style={styles.textMotiva}>💪 CUÁDRICEPS, GEMELOS</Text>
            </View>
        
            <Text style={styles.textTres}>-</Text>

            <Pressable style={styles.button}
                onPress={ () => {
                    navigation.navigate('Godone')
                }}>
                <Text style={styles.nameExercise}>SENTADILLAS</Text>
                <Image
                  style={{ width: 110, height: 100 }}
                  source={{uri: 'data:image/jpeg;base64,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'}}/>
                <Text style={styles.textSeries}>4 X 25</Text>
            </Pressable>
          
            <Text style={styles.textTres}>-</Text>
          
            <Pressable style={styles.button}
                onPress={ () => {
                    navigation.navigate('Godtwo')
                }}>
                <Text style={styles.nameExercise}>ZANCADAS</Text>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{uri: 'https://us.123rf.com/450wm/artinspiring/artinspiring1903/artinspiring190300562/124305430-hombre-haciendo-estocadas-haciendo-ejercicios-deportivos-en-el-gimnasio-entrenamiento-de-piernas-des.jpg?ver=6'}}/>
                <Text style={styles.textSeries}>4 X 30</Text>
            </Pressable>

            <Text style={styles.textTres}>-</Text>
          
            <Pressable style={styles.button}
                onPress={ () => {
                    navigation.navigate('Godtwo')
                }}>
                <Text style={styles.nameExercise}>BURPEES</Text>
                <Image
                  style={{ width: 110, height: 100 }}
                  source={{uri: 'https://us.123rf.com/450wm/lioputra/lioputra2010/lioputra201000163/157833604-gu%C3%ADa-de-ejercicios-con-un-hombre-haciendo-la-posici%C3%B3n-squat-thrust-burpee-en-3-pasos-ilustraci%C3%B3n-sob.jpg?ver=6'}}/>
                <Text style={styles.textSeries}>4 X 10</Text>
            </Pressable>

            <Text style={styles.textTres}>-</Text>
          
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>SENTADILLA EXPLOSIVA</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://image.shutterstock.com/image-vector/man-doing-jump-squat-exercise-260nw-2057450948.jpg'}}/>
              <Text style={styles.textSeries}>4 X 15</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>BULGARIAN SQUAT</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2f357eFYTDwRsWrAksGrQuiczsydg4n0kMm2jaWz8x4OAonInDvuQClA7o37Sd7zRhM&usqp=CAU'}}/>
              <Text style={styles.textSeries}>4 X 20</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>SENTADILLA ABIERTA</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://us.123rf.com/450wm/lioputra/lioputra2106/lioputra210600136/170633745-hombre-haciendo-ejercicio-de-sentadillas-de-postura-ancha-de-sumo-de-peso-corporal-ilustraci%C3%B3n-de-ve.jpg?ver=6'}}/>
              <Text style={styles.textSeries}>4 X 20</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>PISTOL SQUAT</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://previews.123rf.com/images/lioputra/lioputra2011/lioputra201100050/158620564-man-doing-single-leg-squat-pistol-squats-exercise-flat-vector-illustration-isolated-on-white-backgro.jpg'}}/>
              <Text style={styles.textSeries}>4 X 20</Text>
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

  textCuatro: {
      color: 'white',
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

  textCaract: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 23,
      paddingVertical: 12,
  },

  nameExercise: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.15,
      color: 'black'
  },

  textSeries: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.15,
      color: 'black',
  },  

});

export default GsTres

