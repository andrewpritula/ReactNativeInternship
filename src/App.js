/* eslint-disable func-names */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigator';

const App = function () {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#1DA1F2" barStyle="light-content" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
