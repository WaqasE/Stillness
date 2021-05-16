import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, Text, ScrollView, TouchableHighlight } from 'react-native';
import Colors from '../config/Colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function Post({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg4.jpg')} style={styles.betterHalf} />
            <View style={[styles.betterHalf, { backgroundColor: Colors.primary, height: height / 2 }]} />
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <TouchableHighlight underlayColor='rgba(255,255,255,0.3)' style={styles.icon} onPress={() => { navigation.goBack() }}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={30} color={Colors.primary} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(255,255,255,0.3)' style={styles.icon} onPress={() => { console.log('Like') }}>
                        <MaterialCommunityIcons name="heart-outline" size={30} color={Colors.primary} />
                    </TouchableHighlight>
                </View>
            </View>
            <ScrollView style={styles.body} contentContainerStyle={{ padding: 30, }} showsVerticalScrollIndicator={false}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Chaos and choices.</Text>
                </View>
                <View style={styles.bodyTextWrap}>
                    <Text style={styles.bodyText}>Nisi voluptate tempor duis proident reprehenderit. Ut ullamco fugiat sit officia ea ipsum aute proident. </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    betterHalf: {
        height: height / 2,
        width,
    },
    overlay: {
        minWidth: width,
        height,
        backgroundColor: 'rgba(0,0,0,0.1)',
        position: 'absolute'
    },
    header: {
        width,
        height: 80,
        paddingTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleWrap: {
        borderLeftColor: Colors.accent,
        borderLeftWidth: 2,
        paddingVertical: 5,
        paddingLeft: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 22,
        color: Colors.typo,
        fontStyle: 'italic',
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    body: {
        width: width - 80,
        backgroundColor: Colors.primary,
        maxHeight: height - 200,
        position: 'absolute',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        overflow: 'scroll'

    },
    bodyTextWrap: {
        borderLeftColor: Colors.accent,
        borderLeftWidth: 2,
        paddingVertical: 5,
        paddingLeft: 10,
    },
    bodyText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: Colors.typo,
        fontStyle: 'italic',
        alignSelf: 'flex-start',
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});