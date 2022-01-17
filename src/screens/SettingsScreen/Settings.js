import React, { useCallback } from 'react';
import {
  View, useColorScheme, Platform 
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import withLayout from '../../hoc/withLayout';
import ThemeToggler from './ThemeToggler';

import {
  toggleTheme
} from '../../store/theme/actions';

const Settings = function Settings() {
  const { OS } = Platform;
  const { Version } = Platform;
  const { colors } = useTheme();
  const phoneTheme = useColorScheme();
  const { isPhoneTheme, isCustomTheme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  const enableTheme = (theme, isDeviseTheme, isMyTheme) => dispatch(toggleTheme(theme, isDeviseTheme, isMyTheme));
  const togglePhoneTheme = useCallback(() => {
    if (!isPhoneTheme) {
      enableTheme(phoneTheme, true, false);
    } else enableTheme('light', false, false);
  }, [enableTheme]);

  const toggleCustomTheme = useCallback(() => {
    if (!isCustomTheme) {
      enableTheme('dark', false, true);
    } else enableTheme('light', false, false);
  }, [enableTheme]);

  return (
    <View style={{ backgroundColor: colors.background }}>
      {OS === 'android' && Version >= 29 
      && (
      <ThemeToggler 
        title="Enable phone theme"
        colors={colors}
        isThemeEnabled={isPhoneTheme}
        toggleTheme={togglePhoneTheme}
      />
      )}
      <ThemeToggler 
        title="Enable dark theme"
        colors={colors}
        isThemeEnabled={isCustomTheme}
        toggleTheme={toggleCustomTheme}
      />
    </View>
  );
};

export default withLayout(Settings);
