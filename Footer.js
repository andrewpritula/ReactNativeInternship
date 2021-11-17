/* eslint-disable func-names */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    backgroundColor: '#32a852',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

const Footer = function () {
  const [footerTitle] = useState('Footer');
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>{footerTitle}</Text>
    </View>
  );
};

export default Footer;
