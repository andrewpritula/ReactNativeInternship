import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  pageTitle: {
    color: 'black',
    fontSize: 22,
  },
  booklist: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    marginVertical: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  itemDescription: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    fontSize: 22,
    paddingRight: 16,
    color: 'black',
  },
  itemInfo: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  itemField: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#64676D',
  },
  secondIcon: {
    paddingLeft: 16,
  },
  touchableContainer: {
    marginTop: 14,
  },
  touchableItem: {
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});

export default styles;
