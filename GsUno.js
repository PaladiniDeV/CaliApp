import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";
const GsUno = ({ navigation }) => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.text}>REPS Y MÁS REPS</Text>
            <Text style={styles.textTres}>-</Text>
            <Image
                style={{ width: 250, height: 150 }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgvP83Q1-x5hahhvqrcqoj1p52mBZubRfMg&usqp=CAU'}}/>
            
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.textCaract}>CARACTERÍSTICAS:</Text>

            <View
                style={{
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 50,
                }}>
                <Text style={styles.textMotiva}>⌚ 45 MIN</Text>
                <Text style={styles.textMotiva}>🔥 INTERMEDIO/AVANZADO</Text>
                <Text style={styles.textMotiva}>💪 ESPALDA, BRAZOS, HOMBROS</Text>
            </View>
        
            <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godone')
              }}>
              <Text style={styles.nameExercise}>FLEXIONES DIAMANTE</Text>
              <Text style={styles.textCuatro}>-</Text>
              <Image
                style={{ width: 110, height: 80 }}
                source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/51/43/man-doing-diamond-push-up-exercise-vector-34405143.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 10</Text>
          </Pressable>
        
          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>DOMINADAS ABIERTAS</Text>
              <Text style={styles.textCuatro}>-</Text>
              <Image
                style={{ width: 100, height: 80 }}
                source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/417/726/small/man-doing-pull-ups-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>

              <Text style={styles.textSeries}>4 X 10</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>MUSCLE UP</Text>
              
              <Image
                style={{ width: 110, height: 80 }}
                source={{uri: 'https://thumbs.dreamstime.com/b/muscle-up-bar-calisthenics-movement-199541714.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 5</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>FLEXIONES PINO </Text>
              
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://static.strengthlevel.com/images/silhouettes/handstand-push-ups-256x256.png'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 4</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>FLEXIONES DECLINADAS</Text>
              <Text style={styles.textCuatro}>-</Text>
              <Image
                style={{ width: 110, height: 80 }}
                source={{uri: 'https://thumbs.dreamstime.com/b/sport-man-do-decline-push-ups-feet-bench-exercise-sport-man-do-decline-push-ups-feet-bench-198705260.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 15</Text>
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
      fontSize: 15,
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
      fontSize: 18,
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

export default GsUno