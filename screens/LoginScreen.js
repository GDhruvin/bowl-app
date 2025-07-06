import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {storeUserData, isAuthenticated} from '../utils';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await isAuthenticated();
    if (authenticated) {
      navigation.replace('TabNavigator');
    }
  };

  const handleLogin = async () => {
    if (email && password) {
      const userData = {email, password};
      const success = await storeUserData(userData);
      if (success) {
        navigation.replace('TabNavigator');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, flex: 1, justifyContent: 'center'},
  title: {fontSize: 32, marginBottom: 20, textAlign: 'center'},
  input: {borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5},
});

export default LoginScreen;
