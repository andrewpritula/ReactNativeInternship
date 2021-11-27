/* eslint-disable func-names */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import styles from './Styles';

const Settings = function () {
  return (
    <SafeAreaView style={styles.page} edges={['top', 'left', 'right']}>
      <Text style={styles.title}>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
