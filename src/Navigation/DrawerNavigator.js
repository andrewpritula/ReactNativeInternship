import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import Settings from '../Screens/SettingsScreen/Settings';

const Drawer = createDrawerNavigator();

// eslint-disable-next-line func-names
const DrawerNavigator = function () {
  return (
    <Drawer.Navigator screenOptions={
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
      <Drawer.Screen
        name="DrawerProfile"
        component={BottomTabNavigator}
        options={{
          title: 'Profile',
        }} 
      />
      <Drawer.Screen
        name="DrawerSettings"
        component={Settings}
        options={{
          title: 'Settings',
        }} 
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
