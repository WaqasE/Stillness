import React from 'react';
import { StyleSheet, View, Dimensions, StatusBar, ImageBackground, Image } from 'react-native';

import Colors from '../config/Colors';
import Button from '../components/Button'
import AppText from '../components/AppText';


const { width, height } = Dimensions.get('screen');

export default function Entrance({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground source={require('../assets/bg1.jpg')} style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logoEntrance.png')} />
                <AppText style={styles.text}>moments of soaking and centering</AppText>
                <View style={styles.btnWrapper}>
                    <Button
                        title='Login'
                        style={{ borderColor: Colors.primary, borderWidth: 1 }}
                        styleTitle={{ color: Colors.primary }}
                        onPress={() => { navigation.navigate('Login') }}
                    />
                    <Button
                        title='Register'
                        style={{ backgroundColor: Colors.primary, marginTop: 20 }}
                        styleTitle={{ color: Colors.secondary }}
                        onPress={() => { navigation.navigate('Register') }}
                    />
                </View>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: width - 40,
        height: width - 40,
    },
    text: {
        color: Colors.primary,
        fontSize: 15,
        textTransform:'capitalize',
        maxWidth:width-80,
    },
    btnWrapper: {
        width,
        paddingHorizontal: 40,
        marginTop: 60
    },
});