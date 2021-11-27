/* eslint-disable func-names */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './Styles';

const SecondScreen = function ({ route }) {
  const { stringParam } = route.params;

  return (
    <SafeAreaView style={styles.page} edges={['top', 'left', 'right']}>
      <Text style={styles.title}>Second Screen</Text>
      <Text style={styles.item}>
        Parameter from first screen:
        {' '}
        {stringParam}
      </Text>
    </SafeAreaView>
  );
};

SecondScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};
export default SecondScreen;
