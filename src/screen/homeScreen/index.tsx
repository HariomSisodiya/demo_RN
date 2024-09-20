import {View, Text, StyleSheet, Appearance, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../colors/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {homeScreenStyles} from './styles';
import {setThemeColors} from '../../utils/asyncStorage/constants/colors';

const HomeScreen = () => {
  const [theme, setTheme] = useState<string>('light');

  const styles = homeScreenStyles();

  const updateTheme = async () => {
    const colorScheme = Appearance.getColorScheme();
    const storeColor = await AsyncStorage.getItem('theme');

    if (storeColor) {
      setTheme(colorScheme);
    } else {
      // setTheme(colorScheme);
      await AsyncStorage.setItem('theme', colorScheme);
    }
  };

  const switchTheme = (data: string) => {
    console.log('Theme --> ', data);
    setThemeColors(data);
    setTheme(data);
  };

  useEffect(() => {
    updateTheme();

    const setThemeColor = Appearance.addChangeListener(() => {
      updateTheme();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Home Screen</Text>
      <Button
        onPress={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          switchTheme(newTheme);
        }}
        title="Change Theme"
      />
    </View>
  );
};

export default HomeScreen;
