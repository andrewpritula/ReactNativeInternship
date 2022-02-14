import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './Styles';

const Book = function Book({ route }) {
  const {
    title, 
    authors, 
    description, 
    format, 
    num_pages: numPages,
    review_count: reviewCount, 
    genres,
  } = route.params.item;
  const Quotes = [route.params.item.Quote1, route.params.item.Quote2, route.params.item.Quote3];
  const { colors } = useTheme();
  return (
    <ScrollView>
      <Image
        source={{ uri: route.params.item.image_url }}
        style={styles.imageBook}
      />
      <View>
        <Text style={[styles.pageTitle, { color: colors.text }]}>
          Title:
          {' '}
          { title }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Authors:
          {' '}
          { authors }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Description:
          {' '}
          { description }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Format:
          {' '}
          { format }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Number of pages:
          {' '}
          { numPages }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Review count:
          {' '}
          { reviewCount }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Genres:
          {' '}
          { genres }
        </Text>
        <Text style={[styles.quotesTitle, { color: colors.text }]}>Quotes:</Text>
        {Quotes.map((quote, index) => (
          <Text key={index.toString()} style={[styles.itemField, { color: colors.text }]}>{ quote }</Text>
        ))}
      </View>
    </ScrollView>
  );
};

Book.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};

export default Book;
