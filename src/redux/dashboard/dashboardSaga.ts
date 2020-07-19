import {put, call, takeEvery} from 'redux-saga/effects';
import {DASHBOARD} from '../../constants/actionTypes';
import {
  getMyJournalSuccess,
  getMyJournalError,
  getArticleSuccess,
  getArticleError,
  getForumsSuccess,
  getForumsError,
} from './dashboardActions';
import {getMyJournalData, getDashBoardArticle,getALLForums} from '../../api/auth';

export function* getMyJournals() {
  yield takeEvery(DASHBOARD.GET_MY_JOURNAL, function*(payload) {
    try {
      const response = yield call(getMyJournalData, payload);
      if (response.data.status === 'success') {
        yield put(getMyJournalSuccess(response.data.journal));
      }
    } catch (e) {
      yield put(getMyJournalError(e));
    }
  });
}

export function* getArticles() {
  yield takeEvery(DASHBOARD.GET_ALL_ARTICLE, function*(payload) {
    try {
      const response = yield call(getDashBoardArticle, payload);
      if (response.data.status === 'success') {
        yield put(getArticleSuccess(response.data.article));
      }
    } catch (e) {
      yield put(getArticleError(e));
    }
  });
}

export function* getForums() {
  yield takeEvery(DASHBOARD.GET_ALL_FORUM, function*(payload) {
    try {
      const response = yield call(getALLForums, payload);
      if (response.data.status === 'success') {
        yield put(getForumsSuccess(response.data.forum));
      }
    } catch (e) {
      yield put(getForumsError(e));
    }
  });
}
