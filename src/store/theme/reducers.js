import {
  TOGGLE_LIGHT_THEME,
  TOGGLE_DARK_THEME,
  TOGGLE_PHONE_THEME,
} from './types';

const initialState = {
  scheme: 'light',
};

function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LIGHT_THEME:
      return { ...state, scheme: 'light' };
    case TOGGLE_DARK_THEME:
      return { ...state, scheme: 'dark' };
    case TOGGLE_PHONE_THEME:
      return { ...state, scheme: action.payload };
    default:
      return state;
  }
}

export default themeReducer;
