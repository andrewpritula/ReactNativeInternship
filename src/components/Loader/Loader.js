import React from 'react';
import {
  ActivityIndicator, View 
} from 'react-native';
import styles from './Styles';

const Loader = function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="lightblue" />
    </View>
  );
};

export default Loader;
