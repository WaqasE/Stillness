import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, View, Image, Dimensions, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../config/Colors';
import UserContext from '../context/User';
import PlayCards from '../components/PlayCards';
import AppText from '../components/AppText';

const { width, height } = Dimensions.get('screen');

export default function Favourites() {

    const { user } = useContext(UserContext);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar hidden />
            <ImageBackground source={require('../assets/bg6.jpg')} style={styles.container}>
                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <AppText style={styles.heading}>Favourites</AppText>
                        <View style={{ backgroundColor: 'yellow', height: 5, borderRadius: 5, alignSelf: 'flex-end', width: '50%' }} />
                    </View>
                    <View style={styles.programContainer}>
                        <View style={styles.programTitle}>
                            <View style={[styles.iconWrap, { backgroundColor: 'rgba(255, 123, 84,01)' }]}>
                                <FontAwesome5 name='info' size={15} color="white" />
                            </View>
                            <AppText style={{ fontSize: 18, color: Colors.primary }}>Programs</AppText>
                        </View>
                        <PlayCards title='Breathing' play={true} />
                        <PlayCards title='Regrowth' play={true} />
                    </View>

                    <View style={styles.programContainer}>
                        <View style={styles.programTitle}>
                            <View style={[styles.iconWrap, { backgroundColor: 'rgba(28, 197, 220,01)' }]}>
                                <FontAwesome5 name='clock' size={15} color="white" />
                            </View>
                            <AppText style={{ fontSize: 18, color: Colors.primary }}>Moments</AppText>
                        </View>
                        <PlayCards title='Encouragment' play={true} />
                        <PlayCards title='Preparation' play={true} />
                    </View>

                    <View style={styles.programContainer}>
                        <View style={styles.programTitle}>
                            <View style={[styles.iconWrap, { backgroundColor: 'rgba(120, 104, 230,01)' }]}>
                                <FontAwesome5 name='edit' size={15} color="white" />
                            </View>
                            <AppText style={{ fontSize: 18, color: Colors.primary }}>Posts</AppText>
                        </View>
                        <PlayCards title='Getting Started' />
                        <PlayCards title='End of the day' />
                    </View>
                </View>
            </ImageBackground>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        flex: 1,
        backgroundColor: Colors.dark,
    },
    overlay: {
        width,
        height: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 40,
        justifyContent: 'space-evenly',
        overflow: 'hidden'
    },
    header: {
        marginVertical: 20,
        width: 190,
        paddingLeft: 30
    },
    logo: {
        height: 48,
        width: width / 2.4,
    },
    programTitle: {
        flexDirection: 'row',
        marginLeft: 30,
        alignItems: 'center'
    },
    heading: {
        fontSize: 30,
        color: Colors.primary,
        fontFamily: 'NexaBold'
    },
    programContainer: {
        width: width,
        marginBottom: 5,
        overflow: 'hidden'
    },
    iconWrap: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,

    },
});