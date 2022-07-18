import React from 'react'
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native"

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
            
            <Text style={styles.textTres}>-</Text>

            <Text style={styles.text}>¿QUÉ QUIERES ENTRENAR?</Text>

            <Text style={styles.textTres}>-</Text>
            
            <View style={styles.container}>
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Basics')
                    }}>
                    <Image
                        style={{ width: 152, height: 100 }}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8Xt7T51PgNR607Lvl8hDdCeiKS96y6U5ysGCQBAnSJuEbFtED6kilgGuxfUsqj4j568&usqp=CAU'}}/>
                    <Text style={styles.textBtn}>  BÁSICOS  </Text>
                </Pressable>
            </View>

            <Text style={styles.textTres}>-</Text>
            
            <View style={styles.container}>
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Statics')
                    }}>
                    <Image
                        style={{ width: 152, height: 100 }}
                        source={{uri: "https://i.pinimg.com/564x/67/89/dd/6789ddb5bcbce872cd965638f7d4cba3.jpg"}}/>
                    <Text style={styles.textBtn}>ESTÁTICOS</Text>
                </Pressable>
            </View>

            <Text style={styles.textTres}>-</Text>
            
            <View style={styles.container}>
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Godset')
                    }}>
                    <Image
                        style={{ width: 152, height: 100 }}
                        source={{uri: "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/b9/99/17/b999177e-f025-27a4-a1be-0a7aeac18cd3/source/512x512bb.jpg"}}/>
                    <Text style={styles.textBtn}>  GOD SET  </Text>
                </Pressable>
            </View>

            <Text style={styles.textTres}>-</Text>

            <View style={styles.container}>
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Desafio')
                    }}>
                    <Image
                        style={{ width: 152, height: 100 }}
                        source={{uri: "https://us.123rf.com/450wm/friendlyvector/friendlyvector1905/friendlyvector190500005/125590646-silhouette-illustration-of-a-bodybuilder-male-muscular-anatomy-vector-illustration.jpg?ver=6"}}/>
                    <Text style={styles.textBtn}>DESAFIOS</Text>
                </Pressable>
            </View> 

            <Text style={styles.textTres}>-</Text>

            <View style={styles.container}>
                <Pressable style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Welcome')
                    }}>
                    <Text style={styles.textBtn}>VOLVER AL INICIO</Text>
                </Pressable>
            </View>

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

    textTres: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    scrollView: {
        backgroundColor: 'black'
    }, 

    textTres: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});


export default Home

//<Image
//style={{ width: 100, height: 100 }}
//source={require('../../assets/source/images/basicos.png')}/>

