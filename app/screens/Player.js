import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, StatusBar, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av'
import Colors from '../config/Colors';
import MillisToMinutesAndSeconds from '../functions/Duration';
import Donut from '../components/Donut';
import AppText from '../components/AppText';
import Tag from '../components/Tag';

const { width, height } = Dimensions.get('screen');

export default function Player({ navigation }) {

    const [play, setPlay] = useState(false);
    const [loading, setLoading] = useState(true);
    const [track, setTrack] = useState(new Audio.Sound());
    const [status, setStatus] = useState('');
    const [duration, setDuration] = useState(0);
    const [trackDuration, setTrackDuration] = useState(0);
    const [active, setActive] = useState('15 min')

    const loadAsync = async () => {
        if (!track._loaded) {
            setStatus('Loading...');
            track.loadAsync({ uri: 'https://res.cloudinary.com/dbbdp3f35/video/upload/v1620796054/M1_upqmky.mp3' }, {
                shouldPlay: false,
            }).then(
                async () => {
                    setLoading(false);
                    const durationProm = await track.getStatusAsync();
                    setTrackDuration(durationProm.durationMillis);
                }
            ).catch(
                (err) => {
                    setStatus('Error playing audio...');
                    console.log(err);
                }
            )
        }
    }

    const trackControl = async () => {
        if (!loading && !play) {
            setPlay(!play);
            track.playAsync();
        }
        else if (!loading && play) {
            setPlay(!play)
            track.pauseAsync();
        }
    }

    useEffect(
        () => {
            loadAsync();
        }, []
    )

    const getStatus = useCallback(
        async () => {
            const status = await track.getStatusAsync();
            if (trackDuration !== status.positionMillis) {
                setDuration(status.positionMillis);
            }
            else if (trackDuration === status.positionMillis) {
                setPlay(false);
                setDuration(0);
                track.replayAsync();
                track.pauseAsync();
            }
        }
    )

    useEffect(
        () => {
            if (play) {
                const timer = setInterval(
                    () => {
                        getStatus();
                    }, 1000
                )
                return () => clearInterval(timer);
            }
        }, [play]
    )

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground style={styles.container} source={require('../assets/bg6.jpg')}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width, height, zIndex: 0 }} />
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <TouchableHighlight underlayColor='rgba(255,255,255,0.3)' style={styles.icon} onPress={() => { navigation.goBack() }}>
                            <MaterialCommunityIcons name="keyboard-backspace" size={30} color={Colors.primary} />
                        </TouchableHighlight>
                        <AppText style={styles.heading}>Regrowth</AppText>
                    </View>

                    <TouchableHighlight underlayColor='rgba(255,255,255,0.3)' style={styles.icon} onPress={() => { console.log('Like') }}>
                        <MaterialCommunityIcons name="heart-outline" size={30} color='yellow' />
                    </TouchableHighlight>
                </View>
                <View style={styles.body}>
                    <View style={styles.donutWrapper}>
                        <Donut max={trackDuration !== 0 ? trackDuration : 100} percentage={duration >= 1 ? duration : 0} />
                    </View>
                    <View style={styles.playerWrapper}>
                        <View style={styles.player}>
                            <TouchableOpacity onPress={() => { !loading ? trackControl() : null }}>
                                <MaterialCommunityIcons name={play ? 'pause' : 'play'} size={60} color={Colors.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <AppText style={styles.duration}>{MillisToMinutesAndSeconds(duration)}</AppText>
                </View>
                <View style={styles.timeWrapper}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <MaterialCommunityIcons name='clock-outline' size={30} color='yellow' />
                        <AppText style={{ color: Colors.primary, fontSize: 20, marginLeft:10 }}>Time</AppText>
                    </View>
                    <View style={styles.tagWrapper}>
                        <Tag title='15 min' active={active} onPress={()=>{setActive('15 min')}}/>
                        <Tag title='30 min' active={active} onPress={()=>{setActive('30 min')}}/>
                        <Tag title='1 hr' active={active} onPress={()=>{setActive('1 hr')}}/>
                    </View>
                </View>
                {loading && <View style={styles.toast}>
                    <AppText style={{ color: Colors.primary }}>{status}</AppText>
                </View>}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    header: {
        width,
        height: 80,
        paddingTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 100
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        width,
        height,
        paddingTop: 80
    },
    heading: {
        fontSize: 18,
        color: Colors.primary,
        marginLeft: 20
    },
    playerWrapper: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height / 2 - 180
    },
    player: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    toast: {
        padding: 7,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(0,0,0)',
        position: 'absolute',
        bottom: '10%',
        alignSelf: 'center'
    },
    duration: {
        fontSize: 20,
        color: Colors.primary,
        alignSelf: 'center',
        marginTop: 15
    },
    donutWrapper: {
        width: 165,
        height: 165,
        borderRadius: 82.5,
        position: 'absolute',
        top: height / 2 - 107,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeWrapper: {
        width,
        paddingBottom: 50,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        zIndex: 100,
    },
    tagWrapper:{
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'flex-start',
        marginTop:15,
        justifyContent:'space-evenly'
    }

});