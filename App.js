/* eslint-disable func-names */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e0707',
  },
});

const App = function () {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor="#32a852"
        hidden={false}
      />
      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  );
};

export default App;
