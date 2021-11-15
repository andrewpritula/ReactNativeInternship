/* eslint-disable func-names */
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 0.8,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    margin: 10,
    color: '#536658',
    fontSize: 14,
  },
  item: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Content = function () {
  const [name] = useState('John');
  const [sername] = useState('Wick');
  const [mood, setMood] = useState('Where is my dog?');
  return (
    <ScrollView style={styles.content}>
      <TextInput
        style={styles.input}
        onChangeText={setMood}
        placeholder="Change my mood"
      />
      <Text style={styles.title}>Name:</Text>
      <Text style={styles.item}>{name}</Text>
      <Text style={styles.title}>Sername:</Text>
      <Text style={styles.item}>{sername}</Text>
      <Text style={styles.title}>Mood:</Text>
      <Text style={styles.item}>{mood}</Text>
    </ScrollView>
  );
};

export default Content;
