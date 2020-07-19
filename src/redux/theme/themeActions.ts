import {THEME} from '../../constants/actionTypes';

export function changeTheme(themeColor: string) {
  return {
    type: THEME.CHANGE_THEME,
    themeColor,
  };
}

export function setTheme(themeColor: string) {
  return {
    type: THEME.SET_THEME,
    themeColor,
  };
}
