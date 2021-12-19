import {
  LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
} from './types';

const initialState = {
  books: [],
  bookmarks: [],
  error: null,
};

function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: false };
    case GET_BOOKS_SUCCESS:
      return {
        ...state, books: action.payload, loading: false, error: false 
      };
    case GET_BOOKS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ADD_TO_BOOKMARK_LIST:
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    case REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (book) => book.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default booksReducer;
