import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 10,
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
    fontSize: 28,
    fontWeight: 'bold',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  title: {
    padding: 4,
    fontSize: 20,
  },
  item: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
