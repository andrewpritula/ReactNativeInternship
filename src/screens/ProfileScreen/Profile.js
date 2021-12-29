import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  Text,
  View,
  SectionList,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import withLayout from '../../hoc/withLayout';
import MyButton from '../../components/MyButton/MyButton';
import styles from './Styles';

const Profile = function Profile({ navigation }) {
  const { colors } = useTheme();
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
      <View style={[styles.itemContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          {item.title}
        </Text>
        <Text style={[styles.item, { color: colors.text }]}>
          {item.value}
        </Text>
      </View>
    );
  };

  const navigate = () => {
    navigation.navigate('StackSecondScreen', {
      stringParam: 'String from Profile screen',
    });
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
      <MyButton func={navigate} title="Go to second screen" />
      <TextInput
        placeholder="Change my mood"
        placeholderTextColor={colors.text}
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
          <View style={[styles.headerContainer, { backgroundColor: colors.card }]}>
            <Text style={[styles.header, { color: colors.text }]}>{title}</Text>
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
