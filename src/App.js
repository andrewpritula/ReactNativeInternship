import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import DrawerNavigator from './route/DrawerNavigator';

const App = function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
