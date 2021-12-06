import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About/About';

const Stack = createStackNavigator();

const AboutStackNavigator = function AboutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StackAbout"
        component={About}
        options={{
          title: 'About',
        }} 
      />
    </Stack.Navigator>
  );
};

export default AboutStackNavigator;
