/* eslint-disable func-names */
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
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
    borderRadius: 10,
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
    paddingLeft: 5
  },
});

const Content = function () {
  const [name] = useState('John');
  const [sername] = useState('Wick');
  const [nickname] = useState('Boogeyman');
  const [gender] = useState('Male');
  const [origin] = useState('Belarus');
  const [nationality] = useState('Soviet, American');
  const [occupation] = useState('Proffesional hitman');
  const [mood, setMood] = useState('Where is my dog?');
  const [textInput, setTextInput] = useState(); 

  const submitHandler = (value) => {
    setTextInput('');
    setMood(value.nativeEvent.text);
  };

  const changeHandler = (value) => {
    setTextInput(value);
  };

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Change my mood"
        style={styles.input}
        onChangeText={changeHandler}
        onSubmitEditing={submitHandler}
        value={textInput}
      />
      <ScrollView>
        <Text style={styles.title}>Name:</Text>
        <Text style={styles.item}>{name}</Text>
        <Text style={styles.title}>Sername:</Text>
        <Text style={styles.item}>{sername}</Text>
        <Text style={styles.title}>Nickname:</Text>
        <Text style={styles.item}>{nickname}</Text>
        <Text style={styles.title}>Gender:</Text>
        <Text style={styles.item}>{gender}</Text>
        <Text style={styles.title}>Origin:</Text>
        <Text style={styles.item}>{origin}</Text>
        <Text style={styles.title}>Nationality:</Text>
        <Text style={styles.item}>{nationality}</Text>
        <Text style={styles.title}>Occupation:</Text>
        <Text style={styles.item}>{occupation}</Text>
        <Text style={styles.title}>Mood:</Text>
        <Text style={styles.item}>{mood}</Text>
      </ScrollView>
    </View>
  );
};

export default Content;
