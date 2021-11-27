import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileStackNavigator from './ProfileStackNavigator';
import AboutStackNavigator from './AboutStackNavigator';

const Tab = createBottomTabNavigator();

// eslint-disable-next-line func-names
const BottomTabNavigator = function () {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TabProfile"
        component={ProfileStackNavigator}
        options={{
          title: 'Profile',
        }} 
      />
      <Tab.Screen
        name="TabAbout"
        component={AboutStackNavigator}
        options={{
          title: 'About',
        }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
