/* eslint-disable func-names */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const Header = function () {
  const [headerTitle] = useState('Header');
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
