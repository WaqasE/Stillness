import React from 'react';
import { Text } from 'react-native';

import { useFonts } from 'expo-font'

export default function AppText({ style, children }) {
    const [loaded] = useFonts({
        NexaRegular: require('../assets/fonts/NexaRegular.otf'),
        NexaItalic: require('../assets/fonts/NexaRegularItalic.otf'),
        NexaBold: require('../assets/fonts/NexaBold.otf')
    });

    if (!loaded) {
        return null;
    }
    return (
        <Text style={[{ fontFamily: 'NexaRegular' }, style]}>{children}</Text>
    );
}

