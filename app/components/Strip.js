import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AppText from './AppText';

export default function Strip({ icon, title, style, bgColor, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container,style]}>
                <View style={[styles.iconWrap,{backgroundColor:bgColor?bgColor:'rgba(255,255,255,0.4)'}]}>
                    <FontAwesome5 name={icon} size={15} color="white" />
                </View>
                <AppText style={styles.text}>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom:20
    },
    iconWrap: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color: 'white',
        marginLeft: 15
    }
});