import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Carol', age: 34},
        {name: 'Maria', age: 30},
        {name: 'Agatha', age: 14},
        {name: 'Jeh', age: 26},
        {name: 'Luiza', age: 27},
        {name: 'Memell', age: 32},
        {name: 'Julia', age: 28},
        {name: 'Marianne', age: 25},
        


    ]

    return (
       <FlatList 
       keyExtractor={girls => girls.name}
       data={friends}
       renderItem={({ item })=> {
           return <Text style={styles.textStyles}>{item.name} - Age {item.age}</Text>
       }
    }
    />

    );
};

const styles = StyleSheet.create({
    textStyles: {
        marginVertical: 40,

    }


});

export default ListScreen;