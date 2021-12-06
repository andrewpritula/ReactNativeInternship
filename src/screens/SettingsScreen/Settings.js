import React from 'react';
import { Text, View } from 'react-native';
import withLayout from '../../hoc/withLayout';
import styles from './Styles';

const Settings = function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

export default withLayout(Settings);
