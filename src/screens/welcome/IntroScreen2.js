// src/screens/Welcome/IntroScreen2.js

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const IntroScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feature Spotlight: Advanced Reporting</Text>
      <Text style={styles.subtitle}>Get actionable insights into your team's performance.</Text>
      
      <Button
        title="Next: Privacy and Login"
        onPress={() => navigation.navigate('Privacy')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa', // Light Purple background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default IntroScreen2;