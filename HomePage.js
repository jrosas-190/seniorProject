import React from 'react';
import {SafeAreaView, StyleSheet, Button, View} from 'react-native';

const App = () => {
  const handleLoginPress = () => {
    console.log('Login button pressed');
    // Implement login functionality or navigation
  };

  const handleCreateAccountPress = () => {
    console.log('Create Account button pressed');
    // Implement account creation functionality or navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleLoginPress}
          color="#007bff"  // Optional: styling button color
        />
        <Button
          title="Create an Account"
          onPress={handleCreateAccountPress}
          color="#28a745"  // Optional: styling button color
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',  // Optional: change the background color of the page
  },
  buttonContainer: {
    width: '80%',  // Control the width of the button container
    margin: 10,
  },
});

export default App;
