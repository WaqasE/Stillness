import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import FavouritesScreen from '../screens/Favourites';
import ProgramsScreen from '../screens/Programs';
import PostsScreen from '../screens/Posts';
import ProfileScreen from '../screens/Profile';

import Colors from '../config/Colors';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Profile'
            tabBarOptions={{
                activeTintColor: 'yellow',
                inactiveTintColor: 'white',
                style: { height: 60, borderTopWidth: 0, borderBottomWidth: 0, elevation: 0, },
                tabStyle: { height: 60, backgroundColor: 'rgba(0,0,0,0.7)', },
                showLabel: false
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size = 25 }) => {
                    let iconName;

                    if (route.name === 'Programs') {
                        iconName = focused
                            ? 'play-outline'
                            : 'play-outline';
                    }
                    else if (route.name === 'Posts') {
                        iconName = focused
                            ? 'playlist-edit'
                            : 'playlist-edit';
                    }
                    else if (route.name === 'Favourites') {
                        iconName = focused
                            ? 'heart-outline'
                            : 'heart-outline';
                        ;
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'account-outline'
                            : 'account-outline';
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Favourites" component={FavouritesScreen} />
            <Tab.Screen name="Programs" component={ProgramsScreen} />
            <Tab.Screen name="Posts" component={PostsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}