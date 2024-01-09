import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/imageDetail';

const ImageScreen = () => {

    return (
        <View>
        <ImageDetail title='Forest' imageSource={require('../../assets/images/forest.jpg')} imageScore={2} />
        <ImageDetail title='Beach' imageSource={require('../../assets/images/beach.jpg')} imageScore={5}/>
        <ImageDetail title='Mountain' imageSource={require('../../assets/images/mountain.jpg')} imageScore={3}/>
        </View>
    );
}

const styles = StyleSheet.create ({});

export default ImageScreen;