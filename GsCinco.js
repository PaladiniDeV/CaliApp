import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";
const GsCinco = ({ navigation }) => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.text}>FULL BODY CON LASTRE</Text>
            <Text style={styles.textTres}>-</Text>
            <Image
                style={{ width: 250, height: 150 }}
                source={{uri: 'https://www.functionalhumanfh.com/wp-content/uploads/2020/09/Dominadas-chaleco-lastrado.jpg'}}/>
            
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.textCaract}>CARACTERÍSTICAS:</Text>

            <View
                style={{
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 50,
                }}>
                <Text style={styles.textMotiva}>⌚ 90 MIN</Text>
                <Text style={styles.textMotiva}>🔥 EXTREMO</Text>
                <Text style={styles.textMotiva}>💪 FULL BODY</Text>
            </View>
        
            <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godone')
              }}>
              <Text style={styles.nameExercise}>FLEXIONES DIAMANTE</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/51/43/man-doing-diamond-push-up-exercise-vector-34405143.jpg'}}/>
              <Text style={styles.textSeries}>4 X 15</Text>
          </Pressable>
        
          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>RUSSIAN TWIST</Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{uri: 'https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2111/lioputra211100055.jpg'}}/>
              <Text style={styles.textSeries}>4 X 20</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>BULGARIAN SQUAT</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX4v9zaPxZLx2YHODfGlmVCPMNryjxDYX7WmTHCRdT4SqaW2M1Q0XD3B2ZFu6c2MvoqY&usqp=CAU'}}/>
              <Text style={styles.textSeries}>4 X 1 MIN</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>DOMINADAS</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/417/726/small/man-doing-pull-ups-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg'}}/>
              <Text style={styles.textSeries}>4 X 8</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TOES TO BAR</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcxJYJMjP2boaG1gX7cGw6OG0CLGky6Cz7U1tK4OKOK0F9iuFql0j4Ets5gFbxVW1cww&usqp=CAU'}}/>
              <Text style={styles.textSeries}>4 X 8</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>DUMBBELL SQUAT</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://image.shutterstock.com/image-vector/man-doing-dumbbell-squat-thrusters-260nw-2005918028.jpg'}}/>
              <Text style={styles.textSeries}>4 X 12</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TRÍCEPS DE SILLA</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://thumbs.dreamstime.com/b/hombre-haciendo-banco-tricep-dips-vector-plano-ilustraci%C3%B3n-aislado-sobre-fondo-blanco-215404254.jpg'}}/>
              <Text style={styles.textSeries}>4 X 15</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>FONDOS PARALELAS</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://us.123rf.com/450wm/lioputra/lioputra2106/lioputra210600095/170386034-hombre-haciendo-ejercicio-de-barra-dips-ilustraci%C3%B3n-de-vector-plano-aislado-sobre-fondo-blanco.jpg?ver=6'}}/>
              <Text style={styles.textSeries}>4 X 10</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TABLÓN</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://us.123rf.com/450wm/lioputra/lioputra2011/lioputra201100008/158484768-hombre-haciendo-tablones-abdominales-ejercitan-ilustraci%C3%B3n-vectorial-plana-aislada-en-fondo-blanco.jpg?ver=6'}}/>
              <Text style={styles.textSeries}>4 X 1 MIN</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>PISTOL SQUAT</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://previews.123rf.com/images/lioputra/lioputra2011/lioputra201100050/158620564-man-doing-single-leg-squat-pistol-squats-exercise-flat-vector-illustration-isolated-on-white-backgro.jpg'}}/>
              <Text style={styles.textSeries}>4 X 10</Text>
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

export default GsCinco