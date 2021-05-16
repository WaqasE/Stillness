import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import Colors from '../config/Colors';
import Svg, { G, Circle } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';
import AppText from '../components/AppText'
import Strip from '../components/Strip';
import { useState } from 'react';

const { width, height } = Dimensions.get('screen');

export default function Profile({ navigation }) {
    const [loading, setLoading] = useState(false);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg6.jpg')} style={styles.container}>
                <View style={styles.overlay}>

                    <View style={styles.header}>
                        <View style={styles.imageWrapper}>
                            <Svg
                                width={95}
                                height={95}
                                viewBox={`0 0 ${100} ${100}`}
                            >
                                <G rotation='-90' origin={`${50}, ${50}`}>
                                    <Circle
                                        cx='50%'
                                        cy='50%'
                                        r={45}
                                        stroke='yellow'
                                        fill='transparent'
                                        strokeLinecap='round'
                                        strokeWidth='5'
                                        strokeDasharray={2 * Math.PI * 45}
                                        strokeDashoffset={110}
                                    />
                                </G>
                            </Svg>
                            <View style={styles.image}>
                                <FontAwesome5 name="leaf" size={25} color="white" />
                            </View>
                        </View>
                        <View style={styles.date}>
                            <AppText style={styles.headingOff}>Joined</AppText>
                            <AppText style={[styles.heading, { marginTop: 5 }]}><AppText style={{ fontFamily: 'NexaBold', fontSize: 18, color: 'white' }}>1</AppText> mon ago</AppText>
                        </View>
                    </View>
                    <View style={styles.profileName}>
                        <AppText style={{ fontSize: 30, fontFamily: 'NexaBold', color: Colors.primary }}>Waqas</AppText>
                        <AppText style={{ marginTop: 10, fontFamily: 'NexaItalic', width: '80%', lineHeight: 20, color: 'rgba(255,255,255,0.9)' }}>"Stillness reveals the secrets of eternity" <AppText style={{ color: 'yellow' }}>- Laotzu</AppText></AppText>
                    </View>
                    <View style={styles.bodyWrapper}>
                        <Strip icon='info' title='Program' onPress={() => { navigation.navigate('Programs') }} />
                        <Strip icon='clock' title='Moments' onPress={() => { navigation.navigate('Programs') }} />
                        <Strip icon='heart' title='Favourites' onPress={() => { navigation.navigate('Favourites') }} />
                        <Strip icon='power-off' title='Logout' bgColor='rgba(255,0,0,1)' />
                    </View>
                </View>
            </ImageBackground >
            {
                loading && <View style={styles.overlayRecreated}>
                    <View style={styles.loadingToast}>
                        <ActivityIndicator size='small' color='white' />
                        <AppText style={styles.loadingToastText}>Logging out...</AppText>
                    </View>
                </View>
            }
        </View >
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
        height,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 40,
        justifyContent: 'space-evenly',
        overflow:'hidden'
    },
    header: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.4)',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        width: 100,
        height: 100,
        borderLeftColor: 'white',
        borderLeftWidth: 2,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    headingOff: {
        color: 'rgba(255,255,255,0.8)'
    },
    heading: {
        color: 'rgba(255,255,255,1)'
    },
    profileName: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 30
    },
    bodyWrapper: {
        height: 280,
    },
    overlayRecreated: {
        width,
        height,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    loadingToast: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        height: 60,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loadingToastText: {
        fontSize: 13,
        color: Colors.primary,
        marginLeft: 10
    },
});