import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

const Item = function Item({ item, handleRemoveBookmark, colors }) {
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
              style={[styles.secondIcon, { color: colors.text }]}
            />
            <Text style={[styles.itemField, { color: colors.text }]}>{item.rating}</Text>
          </View>
          {/* Buttons */}
          <View style={styles.touchableContainer}>
            <TouchableOpacity
              onPress={() => handleRemoveBookmark(item)}
              activeOpacity={0.7}
              style={styles.touchableItem}
            >
              <MaterialCommunityIcons
                color={colors.primary}
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

Item.propTypes = {
  item: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    num_pages: PropTypes.number.isRequired,
  }).isRequired,
  colors: PropTypes.shape({
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    primary: PropTypes.string,
  }).isRequired,
  handleRemoveBookmark: PropTypes.func.isRequired,
};

export default Item;
