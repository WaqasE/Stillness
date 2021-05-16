import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Entrance from '../screens/Entrance';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AppNav from './AppNav';
import Post from '../screens/Post';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
      <Stack.Screen name="Entrance" component={Entrance} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AppNav" component={AppNav} />
      <Stack.Screen name="Post" component={Post} />

    </Stack.Navigator>
  );
}