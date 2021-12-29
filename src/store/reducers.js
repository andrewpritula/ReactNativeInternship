import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import booksReducer from './booklist/reducers';
import themeReducer from './theme/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks', 'scheme', 'phoneThemeEnabled'],
};

const rootReducer = combineReducers({
  themeReducer: persistReducer(persistConfig, themeReducer),
  booksReducer: persistReducer(persistConfig, booksReducer),
});

export default rootReducer;
