import React, { useEffect, useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import withLayout from '../../hoc/withLayout';

import {
  getBooks,
  addBookmark,
  removeBookmark,
} from '../../store/booklist/actions';

const BooksList = function BookList() {
  const { books, bookmarks } = useSelector((state) => state.booksReducer);
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
      <View style={styles.item}>
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
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            {/* Meta info */}
            <View style={styles.itemInfo}>
              <MaterialCommunityIcons
                color="#64676D"
                name="book-open-page-variant"
                size={20}
              />
              <Text style={styles.itemField}>{item.num_pages}</Text>
              <MaterialCommunityIcons
                color="#64676D"
                name="star"
                size={20}
                style={styles.secondIcon}
              />
              <Text style={styles.itemField}>{item.rating}</Text>
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
                  color={ifExists(item) ? 'lightblue' : 'grey'}
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

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Bestsellers</Text>
      <View style={styles.booklist}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default withLayout(BooksList);
