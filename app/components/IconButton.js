import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../config/Colors'

export default function IconButton({ icon, onPress, backgroundColor = 'white' }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, { backgroundColor }]}>
                <FontAwesome5 name={icon} size={25} color={Colors.primary} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});