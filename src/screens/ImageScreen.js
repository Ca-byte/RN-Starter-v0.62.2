import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../screens/Components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetails 
            title='Florest'
             imageScore={9} 
             imageSource={require('../../assets/forest.jpg')}
             />
            <ImageDetails
             title='Beach'
             imageScore={8}  
             imageSource={require('../../assets/beach.jpg')}
             />
            <ImageDetails 
            title='Mountain' 
            imageScore={5}   
            imageSource={require('../../assets/mountain.jpg')}
            />
        </View>
    
    )

};

const styles = StyleSheet.create({

});

export default ImageScreen;
