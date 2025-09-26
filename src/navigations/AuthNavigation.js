// // src/navigation/AuthNavigator.js

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import IntroScreen1 from '../screens/welcome/IntroScreen1'; // New
// import IntroScreen2 from '../screens/welcome/IntroScreen2'; // New
// import PrivacyScreen from '../screens/welcome/PrivacyScreen'; // New
// import LoginScreen from '../screens/Auth/LoginScreen';

// const Stack = createStackNavigator();

// const AuthNavigator = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro1">
//     <Stack.Screen name="Intro1" component={IntroScreen1} />
//     <Stack.Screen name="Intro2" component={IntroScreen2} />
//     <Stack.Screen name="Privacy" component={PrivacyScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//   </Stack.Navigator>
// );

// export default AuthNavigator;

// src/navigation/AuthNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen1 from '../screens/welcome/IntroScreen1'; 
import IntroScreen2 from '../screens/welcome/IntroScreen2'; 
import PrivacyScreen from '../screens/welcome/PrivacyScreen'; 
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro1">
    <Stack.Screen name="Intro1" component={IntroScreen1} />
    <Stack.Screen name="Intro2" component={IntroScreen2} />
    <Stack.Screen name="Privacy" component={PrivacyScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
