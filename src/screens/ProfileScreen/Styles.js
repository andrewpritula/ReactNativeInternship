import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'lightblue',
    padding: 10
  },
  buttonTitle: {
    padding: 10,
    fontSize: 14,
    color: 'black',
  },
  input: {
    margin: 5,
    padding: 10,
    color: 'black',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'lightblue',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'blue', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  title: {
    padding: 4,
    color: '#536658',
    fontSize: 20,
  },
  item: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
