import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DrawerNavigator from './route/DrawerNavigator';
import { togglePhoneTheme } from './store/theme/actions';

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
  const { scheme, phoneThemeEnabled } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  const phoneTheme = useColorScheme();
  const enablePhoneTheme = (deviseTheme) => dispatch(togglePhoneTheme(deviseTheme));

  useEffect(() => {
    if (phoneThemeEnabled) {
      enablePhoneTheme(phoneTheme);
    }
  }, [phoneTheme]);
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
