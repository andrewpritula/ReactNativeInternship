import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNavigator from './ProfileStackNavigator';
import About from '../screens/AboutScreen/About';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = function BottomTabNavigator() {
  const profileIcon = ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />;
  const aboutIcon = ({ color }) => <MaterialCommunityIcons name="tooltip-account" color={color} size={26} />;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'lightblue',
        } 
      }}
    >
      <Tab.Screen
        name="TabProfile"
        component={ProfileStackNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: profileIcon
        }} 
      />
      <Tab.Screen
        name="TabAbout"
        component={About}
        options={{
          title: 'About',
          tabBarIcon: aboutIcon
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
