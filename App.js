import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Error', 'Please enter both username and password.');
    }
  };

  const handleAppleLogin = () => {
    console.log('Login with Apple ID');
    Alert.alert('Login with Apple ID');
  };

  const handleGmailLogin = () => {
    console.log('Login with Gmail');
    Alert.alert('Login with Gmail');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        <View style={styles.divider} />
        <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
          <Text style={styles.buttonText}>Login with Apple ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gmailButton} onPress={handleGmailLogin}>
          <Text style={styles.buttonText}>Login with Gmail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 4,
  },
  divider: {
    height: 20,
  },
  appleButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  gmailButton: {
    backgroundColor: '#db4a39',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
