import {
  TOGGLE_THEME,
} from './types';

export const theme = (scheme, isPhoneTheme, isCustomTheme) => ({
  type: TOGGLE_THEME,
  payload: { scheme, isPhoneTheme, isCustomTheme }
});

export const toggleTheme = (scheme, isPhoneTheme, isCustomTheme) => (dispatch) => {
  dispatch(theme(scheme, isPhoneTheme, isCustomTheme));
};
