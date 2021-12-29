import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer }
from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import DrawerNavigator from './route/DrawerNavigator';

const MyLightTheme = {
  colors: {
    primary: 'rgb(255, 0, 0)',
    background: 'rgb(255, 242, 242)',
    card: 'rgb(29, 161, 242)',
    text: 'rgb(0, 0, 0)',
  },
};

const MyDarkTheme = {
  colors: {
    primary: 'rgb(255, 0, 0)',
    background: 'rgb(100, 100, 100)',
    card: 'rgb(50, 50, 50)',
    text: 'rgb(255, 255, 255)',
  },
};

const MainContainer = function MainContainer() {
  const { scheme } = useSelector((state) => state.themeReducer);
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={scheme === 'dark' ? '#ff0000' : '#1DA1F2'}
        barStyle="dark-content"
      />
      <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyLightTheme} onReady={() => RNBootSplash.hide()}>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainContainer;
