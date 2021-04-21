import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({navigation}) => {
 
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button onPress={() => navigation.navigate('Components')}
      title='Go to Component Demo'/>
      <Button onPress={() => navigation.navigate('List')}
      title='Go to List Demo'
      />
       <Button onPress={() => navigation.navigate('Image')}
      title='Go to Image Demo'
      />
      <Button 
      onPress={() => navigation.navigate('Counter')} 
      title='Go to Counter Demo'
      />
       <Button 
      onPress={() => navigation.navigate('Color')} 
      title='Go to Color Demo'
      />
       <Button 
      onPress={() => navigation.navigate('Square')} 
      title='Go to Square Demo'
      />
      <Button 
      onPress={() => navigation.navigate('Text')} 
      title='Go to Text Demo'
      />


    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#9932cc",
    width: 160,
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 25,
   
    marginVertical: 20,

  }
});

export default HomeScreen;
