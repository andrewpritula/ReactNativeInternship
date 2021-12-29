import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import MyButton from '../MyButton/MyButton';
import styles from './Styles';

const Error = function Error({ error, fetchBooks }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{error}</Text>
      <View style={styles.buttonContainer}>
        <MyButton func={fetchBooks} title="Reload" />
      </View>
    </View>
  );
};

Error.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Error;
