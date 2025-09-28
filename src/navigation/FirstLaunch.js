// src/navigation/FirstLaunch.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen1 from '../screens/Welcome/IntroScreen1'; 
import IntroScreen2 from '../screens/Welcome/IntroScreen2'; 
import PrivacyScreen from '../screens/Welcome/PrivacyScreen'; 
import LoginScreen from '../screens/Auth/LoginScreen'; // Ensure this file exists

const Stack = createStackNavigator();

const FirstLaunchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro1">
      <Stack.Screen name='Intro1' component={IntroScreen1}/>
      <Stack.Screen name='Intro2' component={IntroScreen2}/>
      <Stack.Screen name='Privacy' component={PrivacyScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
  );
};

export default FirstLaunchNavigator;