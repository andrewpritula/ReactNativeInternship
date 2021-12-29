import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import withLayout from '../../hoc/withLayout';
import styles from './Styles';

const SecondScreen = function SecondScreen({ route }) {
  const { colors } = useTheme();
  const { stringParam } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Second Screen</Text>
      <Text style={{ color: colors.text }}>
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

export default withLayout(SecondScreen);
