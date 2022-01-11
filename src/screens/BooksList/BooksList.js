import React, { useEffect, useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Styles';
import withLayout from '../../hoc/withLayout';
import Error from '../../components/Error/Error';
import Item from './Item';

import {
  getBooks,
  addBookmark,
  removeBookmark,
} from '../../store/booklist/actions';

const BooksList = function BookList() {
  const { colors } = useTheme();
  const {
    books, bookmarks, loading, error 
  } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const fetchBooks = useCallback(() => dispatch(getBooks()), [dispatch]);
  const addToBookmarkList = (book) => dispatch(addBookmark(book));
  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleAddBookmark = useCallback((book) => {
    addToBookmarkList(book);
  }, [addToBookmarkList]);

  const handleRemoveBookmark = useCallback((book) => {
    removeFromBookmarkList(book);
  }, [removeFromBookmarkList]);

  const ifExists = (book) => bookmarks.filter((item) => item.id === book.id).length;

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        handleRemoveBookmark={() => handleRemoveBookmark(item)}
        handleAddBookmark={() => handleAddBookmark(item)}
        ifExists={() => ifExists(item)}
        colors={colors}
      />
    );
  };

  if (error) return <Error error={error} fetchBooks={fetchBooks} />;
  
  return (
    <View style={styles.container}>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Bestsellers</Text>
      <View style={styles.booklist}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchBooks} />
          }
        />
      </View>
    </View>
  );
};

export default withLayout(BooksList);
