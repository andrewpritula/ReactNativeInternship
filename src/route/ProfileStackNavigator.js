import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/ProfileScreen/Profile';
import SecondScreen from '../screens/SecondScreen/SecondScreen';

const Stack = createStackNavigator();

const ProfileStackNavigator = function ProfileStackNavigator() {
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
