/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  Image
} from 'react-native';
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
    image_url, 
    Quote1, 
    Quote2, 
    Quote3 
  } = route.params.item;
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: image_url }}
      />
      <Text style={styles.pageTitle}>
        Title:
        {' '}
        { title }
      </Text>
      <Text>
        Authors:
        {' '}
        { authors }
      </Text>
      <Text>
        Description:
        {' '}
        { description }
      </Text>
      <Text>
        Format:
        {' '}
        { format }
      </Text>
      <Text>
        Number of pages:
        {' '}
        { num_pages }
      </Text>
      <Text>
        Review count:
        {' '}
        { review_count }
      </Text>
      <Text>
        Genres:
        {' '}
        { genres }
      </Text>
      <Text>
        Quote 1:
        {' '}
        { Quote1 }
      </Text>
      <Text>
        Quote 2:
        { Quote2 }
      </Text>
      <Text>
        Quote 3:
        { Quote3 }
      </Text>
    </ScrollView>
  );
};

Book.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};

export default Book;
