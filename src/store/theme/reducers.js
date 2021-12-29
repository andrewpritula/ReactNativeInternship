import {
  TOGGLE_LIGHT_THEME,
  TOGGLE_DARK_THEME,
  TOGGLE_PHONE_THEME,
} from './types';

const initialState = {
  scheme: 'light',
  phoneThemeEnabled: false
};

function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LIGHT_THEME:
      return { ...state, scheme: 'light', phoneThemeEnabled: false };
    case TOGGLE_DARK_THEME:
      return { ...state, scheme: 'dark', phoneThemeEnabled: false };
    case TOGGLE_PHONE_THEME:
      return { ...state, scheme: action.payload, phoneThemeEnabled: true };
    default:
      return state;
  }
}

export default themeReducer;
