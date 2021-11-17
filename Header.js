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
    backgroundColor: '#32a852',
    justifyContent: 'center',
    paddingLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const Header = function () {
  const [headerTitle] = useState('Profile');
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
