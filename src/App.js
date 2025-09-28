// src/App.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import SplashScreen from './screens/Splash/SplashScreen';
import AuthNavigator from './navigation/AuthNavigation';
import MainNavigator from './navigation/MainNavigator';
import FirstLaunchNavigator from './navigation/FirstLaunch'; // Use standard naming for clarity

const Stack = createStackNavigator();

// NOTE: Replace YOUR_WEB_CLIENT_ID_HERE with your actual client ID
const WEB_CLIENT_ID = '403613623867-r4d91sjjgom0l2rtjufijuouboc8mlah.apps.googleusercontent.com'; 

GoogleSignin.configure({ webClientId: WEB_CLIENT_ID ,
      scopes: [
    /* what APIs you want to access on behalf of the user, default is email and profile
    this is just an example, most likely you don't need this option at all! */
    'https://www.googleapis.com/auth/drive.readonly',
  ],
});

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLaunch, setIsFirstLaunch] = useState(null); // Removed TypeScript syntax
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAppStatus = async () => {
            try {
                // Check if this is the first launch
                const firstLaunchKey = await AsyncStorage.getItem('isFirstLaunch');
                if (firstLaunchKey === null) {
                    await AsyncStorage.setItem('isFirstLaunch', 'false');
                    setIsFirstLaunch(true);
                } else {
                    setIsFirstLaunch(false);
                }
                
                // Simulate minimum splash screen time
                await new Promise(resolve => setTimeout(resolve, 3000));

            } catch (error) {
                console.error("Failed to check app status", error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAppStatus();
    }, []);

    // 1. Splash Screen Logic
    if (isLoading || isFirstLaunch === null) {
        return <SplashScreen />;
    }

    // 2. Main Navigation Flow
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Flow Control:
                    1. FirstLaunch: If it's the first time, show Intro Screens (FirstLaunchNavigator).
                    2. LoggedIn: If user is logged in, show Main App.
                    3. Not LoggedIn: Show Login/Auth Screens.
                */}
                {isFirstLaunch ? (
                    <Stack.Screen name="IntroFlow" component={FirstLaunchNavigator} />
                ) : isLoggedIn ? (
                    <Stack.Screen name="MainApp" component={MainNavigator} />
                ) : (
                    <Stack.Screen name="AuthFlow" component={AuthNavigator} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;