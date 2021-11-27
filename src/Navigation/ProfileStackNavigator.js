import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../Screens/Profile/Profile';
import SecondScreen from '../Screens/SecondScreen/SecondScreen';

const Stack = createStackNavigator();

// eslint-disable-next-line func-names
const ProfileStackNavigator = function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StackProfile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="StackSecondScreen"
        component={SecondScreen}
        options={{
          title: 'SecondScreen',
        }} 
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
