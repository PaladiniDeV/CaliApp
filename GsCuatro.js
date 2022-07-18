import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";
const GsCuatro = ({ navigation }) => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.text}>PECHO CBUM</Text>
            <Text style={styles.textTres}>-</Text>
            <Image
                style={{ width: 250, height: 150 }}
                source={{uri: 'data:image/jpeg;base64,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'}}/>
            
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.textCaract}>CARACTERÍSTICAS:</Text>

            <View
                style={{
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 50,
                }}>
                <Text style={styles.textMotiva}>⌚ 45 MIN</Text>
                <Text style={styles.textMotiva}>🔥 INTERMEDIO</Text>
                <Text style={styles.textMotiva}>💪 PECHO</Text>
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
                <Text style={styles.textSeries}>4 X 20</Text>
            </Pressable>
          
            <Text style={styles.textTres}>-</Text>
          
            <Pressable style={styles.button}
                onPress={ () => {
                    navigation.navigate('Godtwo')
                }}>
                <Text style={styles.nameExercise}>DOMINADAS ABIERTAS</Text>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/417/726/small/man-doing-pull-ups-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg'}}/>
                <Text style={styles.textSeries}>4 X 12</Text>
            </Pressable>

            <Text style={styles.textTres}>-</Text>
          
            <Pressable style={styles.button}
                onPress={ () => {
                    navigation.navigate('Godtwo')
                }}>
                <Text style={styles.nameExercise}>MUSCLE UP</Text>
                <Image
                  style={{ width: 110, height: 110 }}
                  source={{uri: 'https://thumbs.dreamstime.com/b/muscle-up-bar-calisthenics-movement-199541714.jpg'}}/>
                <Text style={styles.textSeries}>4 X 5</Text>
            </Pressable>

            <Text style={styles.textTres}>-</Text>
          
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>FLEXIONES DECLINADAS</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://thumbs.dreamstime.com/b/sport-man-do-decline-push-ups-feet-bench-exercise-sport-man-do-decline-push-ups-feet-bench-198705260.jpg'}}/>
              <Text style={styles.textSeries}>4 X 20</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>FONDOS</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Z2aYUYYsfiYzvceFiyK3LrWU81eoEM0jXw&usqp=CAU'}}/>
              <Text style={styles.textSeries}>4 X 10</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>BANDA ELÁSTICA 1</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://p6v9p5b3.stackpathcdn.com/wp-content/uploads/2021/09/Incline-Chest-Press-1.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 25</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>BANDA ELÁSTICA 2</Text>
              <Image
                style={{ width: 170, height: 100 }}
                source={{uri: 'https://p6v9p5b3.stackpathcdn.com/wp-content/uploads/2021/06/Chest-Press.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 25</Text>
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
      fontSize: 16,
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

export default GsCuatro