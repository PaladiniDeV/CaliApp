import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";
const GsDos = ({ navigation }) => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.textTres}>-</Text>
            <Text style={styles.text}>ABS INFERNO</Text>
            <Text style={styles.textTres}>-</Text>
            <Image
                style={{ width: 250, height: 150 }}
                source={{uri: 'https://library.kissclipart.com/20180927/wrw/kissclipart-men-abs-cartoon-clipart-rectus-abdominis-muscle-cl-f726749666479f11.png'}}/>
            
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
                <Text style={styles.textMotiva}>💪 CORE</Text>
            </View>
        
            <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godone')
              }}>
              <Text style={styles.nameExercise}>BICICLETA ABDOMINAL</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://us.123rf.com/450wm/artinspiring/artinspiring1609/artinspiring160900007/63558339-aislado-negro-silueta-de-un-hombre-haciendo-abdominales-sobre-fondo-blanco-crujidos-reversos-ejercic.jpg?ver=6'}}/>
              <Text style={styles.textSeries}>4 X 20</Text>
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
              <Text style={styles.textSeries}>4 X 30</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TABLÓN</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://us.123rf.com/450wm/lioputra/lioputra2011/lioputra201100008/158484768-hombre-haciendo-tablones-abdominales-ejercitan-ilustraci%C3%B3n-vectorial-plana-aislada-en-fondo-blanco.jpg?ver=6'}}/>
              <Text style={styles.textSeries}>4 X 1 MIN</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>
        
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TABLÓN CON ESCALADOR</Text>
              <Image
                style={{ width: 110, height: 110 }}
                source={{uri: 'https://media.istockphoto.com/vectors/woman-doing-abdominal-exercise-position-introduction-with-plank-knee-vector-id1128956759?k=20&m=1128956759&s=612x612&w=0&h=nfrImpCv95k6hKbsvzCoALj2TVQi9BPgZv5e_ombJQ4='}}/>
              <Text style={styles.textSeries}>4 X 1 MIN</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TABLÓN MÓVIL</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://thumbs.dreamstime.com/b/hombre-haciendo-ejercicio-de-elevaci%C3%B3n-brazo-tabla-codo-ilustraci%C3%B3n-vectorial-plana-aislada-en-fondo-blanco-221691342.jpg'}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 1 MIN</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>TABLÓN A PICA</Text>
              
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://media.istockphoto.com/vectors/woman-doing-dolphin-plank-pose-exercise-in-2-steps-for-guide-vector-id1189511805?b=1&k=6&m=1189511805&s=612x612&w=0&h=MqTZ4Q1pfu6O_wgyiwMBC39BB0kulF-B0o7XlVrH8nw='}}/>
              <Text style={styles.textCuatro}>-</Text>
              <Text style={styles.textSeries}>4 X 20</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Godtwo')
              }}>
              <Text style={styles.nameExercise}>CLASSIC ABS</Text>
              <Image
                style={{ width: 110, height: 100 }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7z5Wiu7D8Svr7kpS4lJUTyprTeVIP14n6i-092U47c3uvOCIBquebeO-D2dfT4imikLU&usqp=CAU'}}/>
              <Text style={styles.textCuatro}>-</Text>
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

export default GsDos