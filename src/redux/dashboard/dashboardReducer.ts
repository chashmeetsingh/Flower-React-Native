import {DASHBOARD} from '../../constants/actionTypes';

export const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD.GET_MY_JOURNAL_SUCCESS:
      return {...state, journals: action.response};
    case DASHBOARD.GET_MY_JOURNAL_ERROR:
      return {...state, myjournalError: action.error};

    case DASHBOARD.GET_ALL_ARTICLE_SUCCESS:
      return {...state, articles: action.response};
    case DASHBOARD.GET_ALL_ARTICLE_ERROR:
      return {...state, articlesError: action.error};
    
    case DASHBOARD.GET_ALL_FORUM_SUCCESS:
      return {...state, forums: action.response};
    case DASHBOARD.GET_ALL_FORUM_ERROR:
      return {...state, forumError: action.error};
    default:
      return state;
  }
};
