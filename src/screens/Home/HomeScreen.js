import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ route }) => {

    const { googleToken, userInfo } = route.params || {};

    return (


        <>

            <ScrollView contentContainerStyle={styles.container} >
                <Text style={styles.title}>Welcome, {userInfo ? userInfo.name : "User"}</Text>
                <Text style={styles.subtitle}>Your loggedIn successfully</Text>

                {
                    googleToken && (
                        <View style={styles.infoBox}>
                            <Text style={styles.label}>Google Id Token: </Text>
                            <Text style={styles.tokenText} selectable={true}>{googleToken}</Text>
                        </View>
                    )
                }

                {
                    userInfo && (
                        <View style={styles.infoBox}>
                            <Text style={styles.label}>User Details:</Text>
                            <Text style={styles.detailsText}>Name: {userInfo.name}</Text>
                            <Text style={styles.detailsText}>Email: {userInfo.email}</Text>
                            <Text style={styles.detailsText}>ID: {userInfo.id}</Text>
                            <Text style={styles.detailsText}>Photo: {userInfo.photo}</Text>
                        </View>
                    )
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,


    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 30,

    },
    infoBox: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3

    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333'
    },
    tokenText: {
        fontSize: 12,
        color: '#555',
        fontFamily: 'monospace',
    },
    detailsText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    }


})

export default HomeScreen