import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, View, Image, Dimensions, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import UserContext from '../context/User';
import CardMax from '../components/CardMax';
import Card from '../components/Card';
import ProgramCard from '../components/ProgramCard';
import AppText from '../components/AppText';

const { width, height } = Dimensions.get('screen');

export default function Programs() {

    const { user } = useContext(UserContext);

    const programList = [
        {
            id: 1,
            source: require('../assets/bg5.jpg'),
            title: 'Calm',
            detail: 'A time on calm in middle of any storm and anxiety'
        },
        {
            id: 2,
            source: require('../assets/bg4.jpg'),
            title: 'Happiness',
            detail: 'Encounter a spirit of joy and joufullness wherever you are in this moment'
        },
        {
            id: 3,
            source: require('../assets/bg1.jpg'),
            title: 'Regrowth',
            detail: 'Access a spirit of renewel and the life giving presence of God'
        }
    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar hidden />
            <ImageBackground blurRadius={2} source={require('../assets/bg6.jpg')} style={styles.container}>
                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <AppText style={styles.heading}>Programs</AppText>
                        <View style={{backgroundColor:'yellow', height:5, borderRadius:5, alignSelf:'flex-end', width:'50%'}}/>
                    </View>
                    <View style={styles.programContainer}>
                        {
                            programList.map(
                                ({ id, title, source, detail }) => (
                                    <ProgramCard key={id} title={title} source={source} detail={detail} />
                                )
                            )
                        }
                    </View>
                </View>
            </ImageBackground >
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height:'100%',
        flex: 1,
        backgroundColor: Colors.dark,
    },
    overlay: {
        width,
        height:'100%',
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 40,
        justifyContent: 'space-evenly',
        overflow: 'hidden'
    },
    header:{
        marginVertical: 35,
        width:145,
        marginBottom:30
    },
    heading: {
        fontSize: 30,
        color: Colors.primary,
        fontFamily: 'NexaBold',
    },

    programContainer: {
        alignItems: 'center',
    },
});