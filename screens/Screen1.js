import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {removeUserData} from '../utils';
import {colors} from '../theme/colors';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS, useSharedValue, withSpring} from 'react-native-reanimated';
import SoundPlayer from 'react-native-sound-player';

const Screen1 = () => {
  const navigation = useNavigation();

  const rotation = useSharedValue(0);
  const isRotating = useSharedValue(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    try {
      if (isPlaying) {
        SoundPlayer.stopSound();
        setIsPlaying(false);
        SoundPlayer.playSoundFile('single_tap', 'mp3');
        setIsPlaying(true);
      } else {
        SoundPlayer.playSoundFile('single_tap', 'mp3');
        setIsPlaying(true);
      }
    } catch (e) {
      console.log('Cannot play the sound file:', e);
      setIsPlaying(false);
    }
  };

  const handleLogout = async () => {
    await removeUserData();
    navigation.replace('Login');
  };

  const tapGesture = Gesture.Tap().onEnd(() => {
    console.log('Tapped once');
    runOnJS(playSound)();
  });

  const rotationGesture = Gesture.Rotation()
    .onStart(() => {
      isRotating.value = true;
      console.log('Start rotating');
    })
    .onUpdate(e => {
      rotation.value = e.rotation;
      if (isRotating.value) {
        console.log('Rotating...');
      }
    })
    .onEnd(() => {
      isRotating.value = false;
      rotation.value = withSpring(0);
    });

  const composedGesture = Gesture.Simultaneous(tapGesture, rotationGesture);

  return (
    <View style={styles.container}>
      <GestureDetector gesture={composedGesture}>
        <Image
          source={require('../assets/bowl.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  image: {
    width: 350,
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default Screen1;
