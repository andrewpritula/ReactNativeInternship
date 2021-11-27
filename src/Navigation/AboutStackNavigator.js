import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../Screens/About/About';

const Stack = createStackNavigator();

// eslint-disable-next-line func-names
const AboutStackNavigator = function () {
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
