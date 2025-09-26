// src/screens/Welcome/IntroScreen1.js

import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

const IntroScreen1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Welcome to Podium!</Text>
      <Text style={styles.subtitle}>Your All-in-One Productivity Hub</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.header}>Seamless Task Management</Text>
        <Text style={styles.body}>Organize your daily, weekly, and long-term tasks with an intuitive drag-and-drop interface. Get reminders when deadlines approach.</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.header}>Collaborate Effortlessly</Text>
        <Text style={styles.body}>Share projects and tasks with your team in real-time. Comments and notifications keep everyone on the same page, no matter where they are.</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.header}>Personalized Dashboard</Text>
        <Text style={styles.body}>Track your progress with customizable widgets. See your accomplishments and identify areas for improvement at a glance.</Text>
      </View>

      <Button
        title="Next: Core Features"
        onPress={() => navigation.navigate('Intro2')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    paddingTop: height * 0.1, // Adjust top padding for better visual
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#007AFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
});

export default IntroScreen1;