import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async (userData) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error('Error storing user data:', error);
    return false;
  }
};

export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
    return true;
  } catch (error) {
    console.error('Error removing user data:', error);
    return false;
  }
};

export const isAuthenticated = async () => {
  const userData = await getUserData();
  return userData !== null;
}; 