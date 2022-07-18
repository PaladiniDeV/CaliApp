import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable
} from "react-native";

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.textHelp}>.</Text>
            <Text style={styles.textHelp}>.</Text>
            <Text style={styles.text}>VALLBROTHERS</Text>
            <Text style={styles.textHelp}>.</Text>
            <Text style={styles.textMotiva}>"CONVIERTETE EN UNA BESTIA CON NUESTRAS RUTINAS DE CALISTENIA"</Text>
            <Image
                style={{ width: 300, height: 300 }}
                source={{uri: "https://images-na.ssl-images-amazon.com/images/I/61k8B2WuRfL.png"}}/>

            <Pressable style={styles.button}
                onPress={ () => {
                    navigation.navigate('Home')
                }}>
                <Text style={styles.textBtn}>VAMUUS</Text>
            </Pressable>
            <Text style={styles.textCorp}>©PALADINI</Text>
            <Text style={styles.textCorp}>versión 1.0 2022</Text>
        </View>


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
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 23
    },

    textMotiva: {
        color: 'red',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingHorizontal: 23,
        paddingVertical: 12,
    },

    textCorp: {
        color:'white',
        fontSize: 12,
        fontWeight: "500",
        textAlign: 'center',
        padding: 52,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },

    textBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },

    textHelp: {
        color:'black',
        fontSize: 32
    }

});

export default Welcome