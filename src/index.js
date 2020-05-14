import React, { useState } from 'react';
import { View, Share, SafeAreaView, StyleSheet, Image } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import {
    Grayscale    
} from 'react-native-color-matrix-image-filters';
import Button from './components/button'
import Slider from '@react-native-community/slider';

export default function Test() {

    const [image, setImage] = useState('')
    const [scale, setScale] = useState(0)

    function pickerImage() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage(image.path)
        });
    }
    function changeScale(value) {
        setScale(value)
    }
    function shareImage() {
        Share.share({
            message: 'Image Share',
            url: image
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Grayscale amount={scale}>
                <Image source={{ uri: image }} style={styles.imageStyle} />
            </Grayscale>
            <Slider
                style={styles.scaleSlide}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                onValueChange={changeScale}
                minimumTrackTintColor="#2962ff"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.buttonGroup}>
                <Button
                    title='Picker Image'
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={pickerImage}
                />
                <Button
                    title='Share'
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={shareImage}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 150,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2962ff',
        marginHorizontal: 10
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    imageStyle: {
        width: 300,
        height: 300,
        resizeMode: 'cover'
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 70
    },
    scaleSlide: {
        width: 300,
        height: 40,
        marginTop: 40
    }
})