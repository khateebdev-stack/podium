// src/screens/Auth/LoginScreen.js

import { GoogleSignin, GoogleSigninButton, isErrorWithCode, isSuccessResponse, statusCodes } from '@react-native-google-signin/google-signin';
import React, { useReducer } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';



const LoginScreen = ({ navigation }) => {

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (isSuccessResponse(userInfo)) {
        const idToken = userInfo.data;
      }

      const user = userInfo.data;
      console.log('Google signin')
      console.log('ID Token:', idToken);
      console.log('User Info:', user);
      alert("Login succesful and Toekin generated is", userInfo.data)
      // navigation.navigate('Main', {
      //   screen: 'Home',
      //   params: { googleToken: idToken, userInfo: user }
      // })

    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            Alert.alert("Signin in progress");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            Alert.alert("Android only, play services not available")
            break;
          default:
            Alert.alert("Netwrok problem or something unusual")
            break;

        }
      }else{
        Alert.alert("Error is :", error.code)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <GoogleSigninButton style={styles.GoogleButton} size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  googleButton: {
    width: 192,
    height: 48,
  },
});

export default LoginScreen;