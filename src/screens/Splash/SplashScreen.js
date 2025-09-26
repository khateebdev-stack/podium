import React from "react";
import { StyleSheet , View, Text, } from "react-native";




const SplashScreen = () => {
  return (
    <View style={styles.container}>
<Text style={styles.text}>Welcome to podium</Text>
<Text style={styles.subText}>Loading .....</Text>


    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3498db'

    },
    text:{
        fontSize:28,
        color:'#fff',
        fontWeight:'bold'
    },
    subText:{
        fontSize:16,
        color:'#fff',
        marginTop:10
    }


})
export default SplashScreen