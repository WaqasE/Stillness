import React from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
const { width, height } = Dimensions.get('screen');


export default function Input({ icon, iconColor, style, textColor, ...otherProps }) {
    return (
        <View style={[styles.container, style]}>
            <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
            <TextInput
                style={[styles.textInput, { color: textColor }]}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: width - 110,
        height: '100%',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
});