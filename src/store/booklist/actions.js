import axios from 'axios';
import {
  LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
} from './types';
import url from '../../../config';

export const loading = () => ({ type: LOADING });
export const getBooksSuccess = (data) => ({
  type: GET_BOOKS_SUCCESS,
  payload: data 
});
export const getBooksError = (error) => ({
  type: GET_BOOKS_ERROR,
  payload: error 
});
export const add = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};
export const remove = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};

export const getBooks = () => async (dispatch) => {
  const { BASE_URL } = url;
  dispatch(loading());
  try {
    const res = await axios.get(`${BASE_URL}`);
    dispatch(getBooksSuccess(res.data));
  } catch (e) {
    dispatch(getBooksError(e.message));
  }
};

export const addBookmark = (book) => (dispatch) => {
  dispatch(add(book));
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch(remove(book));
};
