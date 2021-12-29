import React, { useEffect, useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Image,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import withLayout from '../../hoc/withLayout';
import Error from '../../components/Error/Error';

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

  const ifExists = (book) => {
    if (bookmarks.filter((item) => item.id === book.id).length > 0) {
      return true;
    }

    return false;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.item, { backgroundColor: colors.backgroundColor }]}>
        <View style={styles.itemContainer}>
          {/* Book Cover */}
          <Image
            source={{ uri: item.image_url }}
            resizeMode="cover"
            style={styles.image}
          />
          {/* Book Metadata */}
          <View style={styles.itemDescription}>
            {/* Book Title */}
            <View>
              <Text style={[styles.itemTitle, { color: colors.text }]}>{item.title}</Text>
            </View>
            {/* Meta info */}
            <View style={styles.itemInfo}>
              <MaterialCommunityIcons
                color={colors.text}
                name="book-open-page-variant"
                size={20}
              />
              <Text style={[styles.itemField, { color: colors.text }]}>{item.num_pages}</Text>
              <MaterialCommunityIcons
                color={colors.text}
                name="star"
                size={20}
                style={styles.secondIcon}
              />
              <Text style={[styles.itemField, { color: colors.text }]}>{item.rating}</Text>
            </View>
            {/* Buttons */}
            <View style={styles.touchableContainer}>
              <TouchableOpacity
                onPress={() => (ifExists(item)
                  ? handleRemoveBookmark(item)
                  : handleAddBookmark(item))}
                activeOpacity={0.7}
                style={styles.touchableItem}
              >
                <MaterialCommunityIcons
                  color={ifExists(item) ? colors.primary : 'grey'}
                  size={24}
                  name="bookmark"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
