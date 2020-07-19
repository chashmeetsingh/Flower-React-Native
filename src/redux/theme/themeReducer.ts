import {THEME} from '../../constants/actionTypes';

export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case THEME.SET_THEME:
      return {...state, selectedTheme: action.themeColor};
    default:
      return state;
  }
};
