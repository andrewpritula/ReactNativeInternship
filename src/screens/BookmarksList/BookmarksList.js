import React, { useCallback } from 'react';
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
import { removeBookmark } from '../../store/booklist/actions';
import withLayout from '../../hoc/withLayout';

const BookmarksList = function BookmarksList() {
  const { bookmarks } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  const handleRemoveBookmark = useCallback((book) => {
    removeFromBookmarkList(book);
  }, [removeFromBookmarkList]);

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
                onPress={() => handleRemoveBookmark(item)}
                activeOpacity={0.7}
                style={styles.touchableItem}
              >
                <MaterialCommunityIcons
                  color="grey"
                  size={24}
                  name="bookmark-remove"
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
      <Text style={styles.pageTitle}>Bookmarks</Text>
      <View style={styles.booklist}>
        {bookmarks.length === 0 ? (
          <Text style={styles.noItemsTitle}>No one favorite book</Text>
        ) : (
          <FlatList
            data={bookmarks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default withLayout(BookmarksList);
