/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Styles';

const withLayout = function withLayout(Component, edges = ['top', 'left', 'right']) {
  return function page(props) {
    return (
      <SafeAreaView style={styles.page} edges={edges}>
        <Component {...props} />
      </SafeAreaView>
    );
  };
};
export default withLayout;
