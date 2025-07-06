import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const Screen2 = () => {
  const playSound = async () => {
    try {
      SoundPlayer.playAsset(require('../assets/single_tap.mp3'));
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={playSound}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Play Tap Sound</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Screen2;
