import {
  TOGGLE_THEME,
} from './types';

const initialState = {
  scheme: 'light',
  isPhoneTheme: false,
  isCustomTheme: false
};

function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state, 
        scheme: action.payload.scheme,
        isPhoneTheme: action.payload.isPhoneTheme,
        isCustomTheme: action.payload.isCustomTheme
      };
    default:
      return state;
  }
}

export default themeReducer;
