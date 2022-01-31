import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BooksList from '../screens/BooksList/BooksList';
import Book from '../screens/BooksList/Book';

const Stack = createStackNavigator();

const BookDetailsStackNavigator = function BookDetailsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Booklist"
    >
      <Stack.Screen
        name="StackBooks"
        component={BooksList}
        options={{
          title: 'Booklist',
        }}
      />
      <Stack.Screen
        name="StackBook"
        component={Book}
        options={{
          title: 'Book',
        }} 
      />
    </Stack.Navigator>
  );
};

export default BookDetailsStackNavigator;
