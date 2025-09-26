// src/screens/Welcome/PrivacyScreen.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const PrivacyScreen = ({ navigation }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy Acceptance</Text>
      <Text style={styles.policyText}>
        By continuing, you agree to our Terms of Service and Privacy Policy. We use secure encryption and never share your data with third parties without your explicit consent.
      </Text>

      <TouchableOpacity 
        style={styles.checkboxContainer}
        onPress={() => setIsAccepted(!isAccepted)}
      >
        <View style={[styles.checkbox, isAccepted && styles.checkboxChecked]} />
        <Text style={styles.checkboxLabel}>I accept the Privacy Policy and Terms.</Text>
      </TouchableOpacity>
      
      <Button
        title="Continue to Login"
        disabled={!isAccepted} // Button is disabled until the user accepts
        onPress={() => navigation.navigate('Login')}
        color={isAccepted ? '#28a745' : '#a0a0a0'} // Change color based on acceptance
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  policyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default PrivacyScreen;