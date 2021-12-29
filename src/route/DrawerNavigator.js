import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import BooksTabNavigator from './BooksTabNavigator';
import Settings from '../screens/SettingsScreen/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerProfile"
      screenOptions={
        {
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
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
        name="DrawerBooks"
        component={BooksTabNavigator}
        options={{
          title: 'Books',
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
