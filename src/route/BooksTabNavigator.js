import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BooksDetailsStackNavigator from './BookDetailsStackNavigator';
import BookmarksList from '../screens/BookmarksList/BookmarksList';

const Tab = createBottomTabNavigator();

const BooksTabnavigator = function BooksTabnavigator() {
  const booksIcon = ({ color }) => (
    <MaterialCommunityIcons name="book" color={color} size={26} />
  );
  const bookmarksIcon = ({ color }) => (
    <MaterialCommunityIcons name="bookmark" color={color} size={26} />
  );
  return (
    <Tab.Navigator
      initialRouteName="BooksList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="BooksList"
        component={BooksDetailsStackNavigator}
        options={{
          title: 'Books',
          tabBarIcon: booksIcon,
        }}
      />
      <Tab.Screen
        name="BookmarksList"
        component={BookmarksList}
        options={{
          title: 'Bookmarks',
          tabBarIcon: bookmarksIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BooksTabnavigator;
