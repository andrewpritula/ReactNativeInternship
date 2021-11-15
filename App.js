/* eslint-disable func-names */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

const App = function () {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  );
};

export default App;
