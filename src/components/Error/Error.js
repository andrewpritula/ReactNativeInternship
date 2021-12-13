import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View 
} from 'react-native';
import styles from './Styles';

const Error = function Error({ error }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{error}</Text>
    </View>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
