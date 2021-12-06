import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import withLayout from '../../hoc/withLayout';

const About = function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
    </View>
  );
};

export default withLayout(About);
