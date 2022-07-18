import { View, Text, Pressable, StyleSheet, Image, ScrollView} from "react-native"
import React from 'react'

const Intermedio = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
          <Text style={styles.textTres}>-</Text>
          <Text style={styles.text}>¿QUÉ MÚSCULO QUIERES ENTRENAR?</Text>
          <Text style={styles.textTres}>-</Text>

          <View style={styles.btnGroup}>
          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Fullbody')
              }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{uri: 'https://masmusculotenerife.es/wp-content/uploads/sites/20/2020/02/sozluk-yazarlarinin-vucutlari_800623.jpg'}}/>
              <Text style={styles.textBtn}>FULL BODY</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Pecho')
              }}>
              <Image
                  style={{ width: 50, height: 50 }}
                  source={{uri: 'http://cdn.shopify.com/s/files/1/0038/0878/8544/articles/FeaturedImage_PulledChestMuscle.jpg?v=1592870496'}}/>
              <Text style={styles.textBtn}>PECHO</Text>
          </Pressable>
          </View>

          <Text style={styles.textTres}>-</Text>

          <View style={styles.btnGroup}>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Espalda')
              }}>
              <Image
                  style={{ width: 70, height: 50 }}
                  source={{uri: 'https://www.sportsinjuryclinic.net/wp-content/uploads/2019/07/back-muscles800-800x426.jpg'}}/>
              <Text style={styles.textBtn}>ESPALDA</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Abs')
              }}>
              <Image
                  style={{ width: 50, height: 50 }}
                  source={{uri: 'https://e7.pngegg.com/pngimages/639/95/png-clipart-rectus-abdominis-muscle-transverse-abdominal-muscle-abdominal-external-oblique-muscle-human-body-others-miscellaneous-hand.png'}}/>
              <Text style={styles.textBtn}>ABDOMINALES</Text>
          </Pressable>

          </View>

          <Text style={styles.textTres}>-</Text>

          <View style={styles.btnGroup}>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Brazos')
              }}>
                <Image
                  style={{ width: 75, height: 50 }}
                  source={{uri: 'https://barbend.com/es/wp-content/uploads/sites/2/2020/06/image6-1.jpg'}}/>
              <Text style={styles.textBtn}>BÍCEPS-TRÍCEPS</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Hombros')
              }}>
                <Image
                  style={{ width: 85, height: 50 }}
                  source={{uri: 'https://c8.alamy.com/compes/g1hd32/los-musculos-deltoides-anterior-anatomia-musculos-aislados-en-blanco-ilustracion-3d-g1hd32.jpg'}}/>
              <Text style={styles.textBtn}>HOMBROS</Text>
          </Pressable>

          </View>
         
          <Text style={styles.textTres}>-</Text>

          <View style={styles.btnGroup}>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Piernas')
              }}>
                <Image
                  style={{ width: 85, height: 50 }}
                  source={{uri: 'https://www.knee-pain-explained.com/images/knee-anatomy-muscles.jpg'}}/>
              <Text style={styles.textBtn}>PIERNAS</Text>
          </Pressable>

          <Text style={styles.textTres}>-</Text>

          <Pressable style={styles.button}
              onPress={ () => {
                  navigation.navigate('Antebrazo')
              }}>
                <Image
                  style={{ width: 85, height: 50 }}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QQtGvnhyGp3SQY9ta_pUC6YVLYqTWXU9NQ&usqp=CAU'}}/>
              <Text style={styles.textBtn}>ANTEBRAZO</Text>
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

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    width:160,
    height:150
  },

  textBtn: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    color: 'black',
  },

  textTres: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
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

export default Intermedio