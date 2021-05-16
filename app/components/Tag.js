import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Colors from '../config/Colors';
import AppText from './AppText';

export default function Tag({ title, active, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, { borderWidth: active === title ? 2 : 0 }]}>
                <AppText style={{ color: 'white', fontSize: 15 }}>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    }
});