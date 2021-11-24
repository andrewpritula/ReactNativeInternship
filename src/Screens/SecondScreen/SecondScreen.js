/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './Styles';

const SecondScreen = function ({ route }) {
  const { stringParam } = route.params;

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Second Screen</Text>
      <Text style={styles.item}>
        Parameter from first screen:
        {' '}
        {stringParam}
      </Text>
    </View>
  );
};

SecondScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};
export default SecondScreen;
