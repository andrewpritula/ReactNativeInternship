import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  SectionList,
} from 'react-native';
import withLayout from '../../hoc/withLayout';
import styles from './Styles';

const Profile = function Profile({ navigation }) {
  const [mood, setMood] = useState('Where is my dog?');
  const [textInput, setTextInput] = useState();
  const DATA = [
    {
      title: 'Main info',
      data: [
        { title: 'Name:', value: 'John' }, 
        { title: 'Sername:', value: 'Wick' },
        { title: 'Birth date:', value: 'September 12, 1964' },
        { title: 'Age:', value: '57' }
      ]
    },
    {
      title: 'Other info',
      data: [
        { title: 'Nickname:', value: 'Boogeyman' }, 
        { title: 'Gender:', value: 'Male' }, 
        { title: 'Nationality:', value: 'Soviet, American' },
        { title: 'Origin:', value: 'Belarus' },
        { title: 'Occupation:', value: 'Hitman' },
        { title: 'Mood:', value: mood }
      ]
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.item}>
          {item.value}
        </Text>
      </View>
    );
  };

  const submitHandler = useCallback((value) => {
    setTextInput('');
    setMood(value.nativeEvent.text);
  }, [setMood]);

  const changeHandler = useCallback((value) => {
    setTextInput(value);
  }, [setTextInput]);

  return (
    <>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('StackSecondScreen', {
              stringParam: 'String from Profile screen',
            });
          }}
        >
          <Text style={styles.buttonTitle}>Go to second screen</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Change my mood"
        placeholderTextColor="grey" 
        style={styles.input}
        onChangeText={changeHandler}
        onSubmitEditing={submitHandler}
        value={textInput}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        style={styles.listContainer}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
    </>
  );
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withLayout(Profile);
