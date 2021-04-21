import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';



const TextScreen = () => {
    const [Password, setPassword] = useState('');
  

  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Enter Password:</Text>
                <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={Password}
                onChangeText={(newValue) => setPassword(newValue)}
                />
                <View>
                    {Password.length > 6 && Password.length < 8 ? <Text style={styles.alertAccepted}>Password accepted!</Text> : <Text style={styles.alertNotAccepted}>Password must be less than 6 characteres</Text>}   
                 
                </View>
            </View>
        </TouchableWithoutFeedback>
    ); 
}

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        width: "100%",

    },
    title: {
        marginStart: 30,
        marginVertical: 20,
        fontSize: 18,
        fontWeight: '600',

    },
    alertAccepted:{
        marginStart: 30,
        marginTop: 10,
        fontSize: 13,
        fontWeight: '600',
        color: "#00FF00"

    },
    alertNotAccepted:{
        marginStart: 30,
        marginTop: 10,
        fontSize: 13,
        fontWeight: '600',
        color: "#FF0000"

    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 20,
        height: 60,
        borderRadius: 10,
        paddingStart: 20,


    }
        
})

export default TextScreen;