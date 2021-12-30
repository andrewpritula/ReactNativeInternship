import React, { useCallback } from 'react';
import {
  Text, View, useColorScheme, Switch 
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import withLayout from '../../hoc/withLayout';
import styles from './Styles';

import {
  toggleTheme
} from '../../store/theme/actions';

const Settings = function Settings() {
  const { colors } = useTheme();
  const phoneTheme = useColorScheme();
  const { isPhoneTheme, isCustomTheme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  const enableTheme = (theme, isDeviseTheme, isMyTheme) => dispatch(toggleTheme(theme, isDeviseTheme, isMyTheme));
  const togglePhoneTheme = useCallback(() => {
    if (!isPhoneTheme) {
      enableTheme(phoneTheme, true, false);
    } else enableTheme('light', false, false);
  }, [isPhoneTheme]);

  const toggleCustomTheme = useCallback(() => {
    if (!isCustomTheme) {
      enableTheme('dark', false, true);
    } else enableTheme('light', false, false);
  }, [isCustomTheme]);

  return (
    <View style={{ backgroundColor: colors.background }}>
      <View style={styles.themeContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          Enable phone theme
        </Text>
        <Switch
          trackColor={{ false: '#8a8a8a', true: '#6eff66' }}
          thumbColor={isPhoneTheme ? '#2f9400' : '#cccccc'}
          onValueChange={togglePhoneTheme}
          value={isPhoneTheme}
        />
      </View>
      <View style={styles.themeContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          Enable dark theme
        </Text>
        <Switch
          trackColor={{ false: '#8a8a8a', true: '#6eff66' }}
          thumbColor={isCustomTheme ? '#2f9400' : '#cccccc'}
          onValueChange={toggleCustomTheme}
          value={isCustomTheme}
        />
      </View>
    </View>
  );
};

export default withLayout(Settings);
