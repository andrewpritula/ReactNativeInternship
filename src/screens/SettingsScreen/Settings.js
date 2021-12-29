import React, { useCallback } from 'react';
import {
  Text, View, useColorScheme 
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import withLayout from '../../hoc/withLayout';
import MyButton from '../../components/MyButton/MyButton';
import styles from './Styles';

import {
  toggleDarkTheme,
  toggleLightTheme,
  togglePhoneTheme,
} from '../../store/theme/actions';

const Settings = function Settings() {
  const { colors } = useTheme();
  const { scheme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  const phoneTheme = useColorScheme();

  const enableDarkTheme = () => dispatch(toggleDarkTheme());
  const enableLightkTheme = () => dispatch(toggleLightTheme());
  const enablePhoneTheme = (deviseTheme) => dispatch(togglePhoneTheme(deviseTheme));
  
  const handleDarkTheme = useCallback(() => {
    enableDarkTheme();
  }, [enableDarkTheme]);

  const handleLightTheme = useCallback(() => {
    enableLightkTheme();
  }, [enableLightkTheme]);

  const handlePhoneTheme = useCallback(() => {
    enablePhoneTheme(phoneTheme);
  }, [enablePhoneTheme]);

  return (
    <View>
      <View style={[styles.themeContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          Current theme: 
          {' '}
          {scheme}
        </Text>
      </View>
      {/* Phone Theme */}
      <MyButton
        func={handlePhoneTheme}
        title="Enable phone theme"
      />

      {/* Light Theme */}
      <MyButton
        func={handleLightTheme}
        title="Enable light theme"
      />

      {/* Dark Theme */}
      <MyButton
        func={handleDarkTheme}
        title="Enable dark theme"
      />
    </View>
  );
};

export default withLayout(Settings);
