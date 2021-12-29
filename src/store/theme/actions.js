import {
  TOGGLE_LIGHT_THEME,
  TOGGLE_DARK_THEME,
  TOGGLE_PHONE_THEME,
} from './types';

export const lightTheme = () => ({ type: TOGGLE_LIGHT_THEME });
export const darkTheme = () => ({ type: TOGGLE_DARK_THEME });
export const phoneTheme = (scheme) => ({ type: TOGGLE_PHONE_THEME, payload: scheme });

export const toggleLightTheme = () => (dispatch) => {
  dispatch(lightTheme());
};

export const toggleDarkTheme = () => (dispatch) => {
  dispatch(darkTheme());
};

export const togglePhoneTheme = (scheme) => (dispatch) => {
  dispatch(phoneTheme(scheme));
};
