import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Image, Dimensions, ActivityIndicator } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

import TextButton from '../components/TextButton';


import Colors from '../config/Colors';
import IconButton from '../components/IconButton';
import AppText from '../components/AppText';
const { width, height } = Dimensions.get('screen');


export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState('');


    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground blurRadius={2} style={[styles.container, { padding: 40, justifyContent: 'space-evenly' }]} source={require('../assets/bg1.jpg')}>
                <View>
                    <Image style={styles.logo} source={require('../assets/logoWhite.png')} />
                    <TextButton
                        title='Log In'
                        disabled={true}
                        style={{ color: Colors.primary, marginTop: 20 }}
                    />
                    <TextButton
                        title='Register'
                        disabled={false}
                        style={{ color: 'rgba(255,255,255,0.5)', marginTop: 5 }}
                        onPress={() => { navigation.navigate('Register') }}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Input
                        icon='email-outline'
                        iconColor={active === 'email' ? Colors.primary : 'grey'}
                        style={{ marginTop: 20, borderBottomColor: active === 'email' ? Colors.primary : 'grey' }}
                        placeholder='Email'
                        placeholderTextColor='grey'
                        onFocus={() => setActive('email')}
                        onChangeText={(email) => { setEmail(email) }}
                        textColor={active === 'email' ? Colors.primary : 'grey'}
                        value={email}
                    />
                    <Input
                        icon='lock-outline'
                        iconColor={active === 'password' ? Colors.primary : 'grey'}
                        style={{ marginTop: 20, borderBottomColor: active === 'password' ? Colors.primary : 'grey' }}
                        placeholder='Password'
                        onFocus={() => setActive('password')}
                        secureTextEntry
                        placeholderTextColor='grey'
                        onChangeText={(password) => { setPassword(password) }}
                        value={password}
                        textColor={active === 'password' ? Colors.primary : 'grey'}
                    />

                    <Button
                        title='Login'
                        style={{ backgroundColor: email && password ? Colors.primary : 'grey', marginTop: 20 }}
                        styleTitle={{ color: Colors.secondary }}
                        onPress={() => { navigation.navigate('AppNav') }}
                        disabled={(email && password) ? false : true}
                    />
                    <View style={styles.socialHeader}>
                        <View style={styles.socialLine} />
                        <AppText style={styles.socialText}>Or Continue with</AppText>
                        <View style={styles.socialLine} />
                    </View>
                    <View style={styles.social}>
                        <IconButton
                            icon='facebook-f'
                            backgroundColor='#0278FD'
                        />
                        <IconButton
                            icon='google'
                            backgroundColor='#EE3B2D'
                        />
                    </View>
                </View>
            </ImageBackground>
            {
                loading && <View style={styles.overlay}>
                    <View style={styles.loadingToast}>
                        <ActivityIndicator size='small' color='white' />
                        <AppText style={styles.loadingToastText}>Logging in...</AppText>
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
    },
    overlay: {
        width,
        height,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 0
    },
    logo: {
        height: 58,
        width: width / 2,
    },
    inputWrapper: {
    },
    socialHeader: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    },
    socialLine: {
        width: '25%',
        backgroundColor: 'grey',
        height: 1
    },
    socialText: {
        color: Colors.primary,
        fontSize: 13
    },
    social: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 100,
        justifyContent: 'space-between',
        marginTop: 20
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
    overlay: {
        width,
        height,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)'

    }
});