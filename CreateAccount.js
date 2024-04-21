import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text, ScrollView} from 'react-native';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [foodDescription, setFoodDescription] = useState('');

  const handleSubmit = () => {
    // Here, you would usually send the data to your server for account creation
    // For this example, we'll just log it to the console
    console.log('Account details:', { username, password, phoneNumber, vendorName, foodDescription });
    alert('Account submitted! Check the console for details.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={setVendorName}
          value={vendorName}
          placeholder="Name of Vendor"
        />
        <TextInput
          style={styles.input}
          onChangeText={setFoodDescription}
          value={foodDescription}
          placeholder="Description of Food"
          multiline
        />
        <Button title="Create Account" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateAccount;
