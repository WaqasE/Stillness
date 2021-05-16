import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableWithoutFeedback } from 'react-native';
import Colors from '../config/Colors';
import AppText from './AppText';

const { width, height } = Dimensions.get('screen');

export default function Card({ title, source, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground style={{ width: '100%', height: '100%', }} source={source}>
                    <View style={styles.overlay}>
                        <AppText style={styles.title}>{title}</AppText>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '97%',
        width: 170,
        borderRadius: 20,
        backgroundColor: Colors.off,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 25,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: Colors.primary,
        position: 'absolute',
        bottom: 20,
        left: 20
    }
});