import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10
  },
  buttonTitle: {
    fontSize: 16,
    color: 'black',
  },
});

export default styles;
