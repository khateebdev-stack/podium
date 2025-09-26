import { Button, StyleSheet, View, text } from "react-native";

import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
 <View style={styles.container}>
    <Text>Welcome back......</Text>
    <Button title="Go to Login" onPress={()=>navigation.navigate('Login')}/>
 </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
export default WelcomeScreen