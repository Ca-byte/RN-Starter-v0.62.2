import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Carol';
    return (
        <View>
            <Text style={styles.textStyles}>Getting started with React Native</Text>
            <Text style={styles.textSubHeader}>My name is {name}</Text>   
        </View>
    

    ); 
};


const styles = StyleSheet.create({
    textStyles: {
        
        fontSize: 45,
        fontWeight: '600',
        alignSelf: 'center',
        marginVertical: 40,
    
    },

    textSubHeader: {
        color: '#7F00FF',
        fontSize: 20,
        fontWeight: '600',
        
    
   }
    

});

export default ComponentsScreen;