import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './Styles';

const MyButton = function MyButton({ func, title }) {
  const { colors } = useTheme();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.card }]}
        onPress={func}
      >
        <Text style={[styles.buttonTitle, { color: colors.text }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

MyButton.propTypes = {
  func: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default MyButton;
