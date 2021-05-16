import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AppText from './AppText'

export default function TextButton({ title, onPress, style, disabled }) {
    return (
        <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
            <View>
                <AppText style={[styles.text, style]}>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontFamily: 'NexaBold'
    }
});