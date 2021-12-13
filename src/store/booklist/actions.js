/* eslint-disable no-unreachable */
import axios from 'axios';
import {
  LOADING,
  GET_BOOKS,
  GET_ERROR,
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
} from './types';
import url from '../../../config';

export const getBooks = () => async (dispatch) => {
  const { BASE_URL } = url;
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get(`${BASE_URL}`);
    dispatch({
      type: GET_BOOKS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.message,
    });
  }
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
