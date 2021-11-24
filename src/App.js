/* eslint-disable func-names */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Profile from './Screens/Profile/Profile';
import SecondScreen from './Screens/SecondScreen/SecondScreen';

const Stack = createNativeStackNavigator();

const App = function () {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#1DA1F2" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#1DA1F2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }
        >
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'Profile',
            }}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen} 
            options={{
              title: 'SecondScreen',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
