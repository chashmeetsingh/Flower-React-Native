import {DASHBOARD} from '../../constants/actionTypes';

export function getMyJournals(user_id, page_no) {
  return {
    type: DASHBOARD.GET_MY_JOURNAL,
    payload: {user_id, page_no},
  };
}

export function getMyJournalSuccess(response) {
  return {
    type: DASHBOARD.GET_MY_JOURNAL_SUCCESS,
    response,
  };
}

export function getMyJournalError(error) {
  return {
    type: DASHBOARD.GET_MY_JOURNAL_ERROR,
    error,
  };
}

export function getArticles(user_id, page_no) {
  return {
    type: DASHBOARD.GET_ALL_ARTICLE,
    payload: {user_id, page_no},
  };
}

export function getArticleSuccess(response) {
  return {
    type: DASHBOARD.GET_ALL_ARTICLE_SUCCESS,
    response,
  };
}

export function getArticleError(error) {
  return {
    type: DASHBOARD.GET_ALL_ARTICLE_ERROR,
    error,
  };
}

export function getForums(user_id, page_no) {
  return {
    type: DASHBOARD.GET_ALL_FORUM,
    payload: {user_id, page_no},
  };
}

export function getForumsSuccess(response) {
  return {
    type: DASHBOARD.GET_ALL_FORUM_SUCCESS,
    response,
  };
}

export function getForumsError(error) {
  return {
    type: DASHBOARD.GET_ALL_FORUM_ERROR,
    error,
  };
}
