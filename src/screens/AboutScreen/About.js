import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './Styles';
import withLayout from '../../hoc/withLayout';

const About = function About() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>About Screen</Text>
    </View>
  );
};

export default withLayout(About);
