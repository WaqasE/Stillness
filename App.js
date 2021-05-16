import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import UserContext from './app/context/User'

import AppStack from './app/routes/AppStack'

export default function App() {

  const [user, setUser] = useState({
    _id: '',
    name: 'John Doe',
    email: '',
  });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </UserContext.Provider>
  );
}