/* eslint-disable func-names */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import {
  Button,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { styles } from './Styles';

const Profile = function ({ navigation }) {
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
    <SafeAreaView style={styles.content} edges={['top', 'left', 'right']}>
      <View style={styles.btnContainer}>
        <Button
          title="Go to second screen"
          onPress={() => {
            navigation.navigate('SecondScreen', {
              stringParam: 'String from Profile screen',
            });
          }}
        />
      </View>
      <TextInput
        placeholder="Change my mood"
        placeholderTextColor="grey" 
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
    </SafeAreaView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
