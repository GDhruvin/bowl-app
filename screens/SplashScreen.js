import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {isAuthenticated} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkAuthAndNavigate = async () => {
      // Add a small delay to show splash screen
      await new Promise(resolve => setTimeout(resolve, 2000));

      const authenticated = await isAuthenticated();
      if (authenticated) {
        navigation.replace('TabNavigator');
      } else {
        navigation.replace('Login');
      }
    };

    checkAuthAndNavigate();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreen;
