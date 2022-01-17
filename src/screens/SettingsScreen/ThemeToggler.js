import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Switch 
} from 'react-native';
import styles from './Styles';

const ThemeToggler = function ThemeToggler({
  title, colors, isThemeEnabled, toggleTheme 
}) {
  return (
    <View style={{ backgroundColor: colors.background }}>
      <View style={styles.themeContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          {title}
        </Text>
        <Switch
          trackColor={{ false: '#8a8a8a', true: '#525252' }}
          thumbColor={isThemeEnabled ? colors.card : '#cccccc'}
          onValueChange={toggleTheme}
          value={isThemeEnabled}
        />
      </View>
    </View>
  );
};

ThemeToggler.propTypes = {
  title: PropTypes.string.isRequired,
  isThemeEnabled: PropTypes.bool.isRequired,
  colors: PropTypes.shape({
    background: PropTypes.string,
    text: PropTypes.string,
    card: PropTypes.string
  }).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggler;
