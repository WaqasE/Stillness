import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../config/Colors';

const { width, height } = Dimensions.get('screen');

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';

export default function PlayCards({ title, play }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.title}>{title}</AppText>
            {play && <MaterialCommunityIcons name="play-outline" size={30} color="yellow" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width - 60,
        height: 45,
        backgroundColor: 'rgba(166,166,166,0.4)',
        flexDirection: 'row',
        paddingHorizontal: 40,
        alignItems: 'center',
        marginVertical: 10,
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        overflow: 'hidden',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 15,
        color: Colors.primary
    }
});