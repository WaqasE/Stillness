import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AppText from './AppText';

export default function Button({ title, onPress, style, styleTitle, disabled }) {
    return (
        <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
            <View style={[styles.container, style]}>
                <AppText style={[styles.text, styleTitle]}>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        letterSpacing: 1,
        fontFamily:'NexaBold'
    }
});