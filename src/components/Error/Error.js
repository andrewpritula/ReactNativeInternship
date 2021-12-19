import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import styles from './Styles';

const Error = function Error({ error, fetchBooks }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{error}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={fetchBooks}
        >
          <Text style={styles.buttonTitle}>Reload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Error.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Error;
