import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    color: 'black',
    height: 40,
    margin: 5,
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
    color: 'black',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },
});

// eslint-disable-next-line import/prefer-default-export
export { styles };
