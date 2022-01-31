import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Styles';
import { removeBookmark } from '../../store/booklist/actions';
import withLayout from '../../hoc/withLayout';
import Item from './Item';
import MyButton from '../../components/MyButton/MyButton';

const BookmarksList = function BookmarksList({ navigation }) {
  const { colors } = useTheme();
  const { bookmarks } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  const handleRemoveBookmark = useCallback((book) => {
    removeFromBookmarkList(book);
  }, [removeFromBookmarkList]);

  const navigate = (item) => {
    navigation.navigate('StackBook', {
      item
    });
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <Item
          item={item}
          handleRemoveBookmark={() => handleRemoveBookmark(item)}
          colors={colors}
        />
        <MyButton func={() => navigate(item)} title="Open Book" />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Bookmarks</Text>
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

BookmarksList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withLayout(BookmarksList);
