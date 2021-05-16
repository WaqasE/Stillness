import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, Text } from 'react-native';

import Colors from '../config/Colors'
import AppText from './AppText';

const { width, height } = Dimensions.get('screen');

export default function ProgramCard({ source, title, detail }) {
    return (
        <View style={[styles.container, { marginBottom: 20 }]}>
            <ImageBackground style={styles.container} source={source}>
                <View style={styles.overlay}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.detail}>{detail}</AppText>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width - 60,
        height: 180,
        borderRadius: 20,
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
        fontSize: 20,
        color: Colors.primary,
        fontFamily: 'NexaItalic'
    },
    detail: {
        fontSize: 15,
        color: Colors.off,
        marginTop: 10,
        fontFamily: 'NexaItalic',
        lineHeight: 25
    }
});