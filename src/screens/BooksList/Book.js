/* eslint-disable camelcase */
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
    num_pages,
    review_count, 
    genres,  
    Quote1, 
    Quote2, 
    Quote3 
  } = route.params.item;
  const { colors } = useTheme();
  return (
    <ScrollView>
      <Image
        source={{ uri: route.params.item.image_url }}
        style={styles.imageBook}
      />
      <View style={styles.container}>
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
          { num_pages }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Review count:
          {' '}
          { review_count }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Genres:
          {' '}
          { genres }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Quote 1:
          {' '}
          { Quote1 }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Quote 2:
          { Quote2 }
        </Text>
        <Text style={[styles.itemField, { color: colors.text }]}>
          Quote 3:
          { Quote3 }
        </Text>
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
