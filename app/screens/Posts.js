import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, View, Image, Dimensions, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import UserContext from '../context/User';
import CardMax from '../components/CardMax';
import Card from '../components/Card';
import AppText from '../components/AppText';

const { width, height } = Dimensions.get('screen');

export default function Posts({ navigation }) {

    const { user } = useContext(UserContext);

    const programList = [
        {
            id: 1,
            source: require('../assets/bg1.jpg'),
            title: '5 Simple ways to relax'
        },
        {
            id: 2,
            source: require('../assets/bg3.jpg'),
            title: 'Begin a new day'
        }
    ]

    const momentsList = [
        {
            id: 1,
            source: require('../assets/bg4.jpg'),
            title: 'Courage'
        },
        {
            id: 2,
            source: require('../assets/bg5.jpg'),
            title: 'Regrowth'
        }
    ]

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden />
            <ImageBackground blurRadius={2} source={require('../assets/bg6.jpg')} style={styles.container}>
                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <AppText style={styles.heading}>Posts</AppText>
                        <View style={{ backgroundColor: 'yellow', height: 5, borderRadius: 5, alignSelf: 'flex-end', width: '50%' }} />
                    </View>
                    <View style={styles.programContainer}>
                        <AppText style={{ fontSize: 18, marginBottom: 10, color: Colors.primary, marginLeft: 40 }}>Recent Posts</AppText>
                        <FlatList
                            data={programList}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ paddingHorizontal: 30, }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => (<View style={{ width: 20, height: '100%' }} />)}
                            renderItem={
                                ({ item }) => (
                                    <CardMax title={item.title} source={item.source} onPress={() => { navigation.navigate('Post') }} />
                                )
                            }
                        />
                    </View>
                    <View style={styles.momentsContainer}>
                        <AppText style={{ fontSize: 18, marginBottom: 10, color: Colors.primary, marginLeft: 40 }}>Moments</AppText>
                        <FlatList
                            data={momentsList}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ paddingHorizontal: 30, }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => (<View style={{ width: 20, height: '100%' }} />)}
                            renderItem={
                                ({ item }) => (
                                    <Card title={item.title} source={item.source} onPress={() => { navigation.navigate('Post') }} />
                                )
                            }
                        />
                    </View>
                </View>
            </ImageBackground>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        flex: 1,
    },
    overlay: {
        width,
        height,
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingVertical: 40,
        justifyContent: 'space-evenly',
        overflow: 'hidden'
    },
    header: {
        marginVertical: 20,
        width: 80,
        marginLeft:40
    },
    heading: {
        fontSize: 30,
        color: Colors.primary,
        fontFamily: 'NexaBold',
    },
    programContainer: {
        height: 300,
        width: width,
        justifyContent: 'space-between',
    },
    momentsContainer: {
        height: 200,
        width: width,
        marginBottom: 40

    }
});