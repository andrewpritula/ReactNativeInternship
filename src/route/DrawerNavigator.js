import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import Settings from '../screens/SettingsScreen/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: 'lightblue',
            width: 240,
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
