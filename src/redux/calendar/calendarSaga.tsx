import {put, call, takeEvery} from 'redux-saga/effects';
import {CALENDAR} from '../../constants/actionTypes';
import {
  createJournalEntrySuccess,
  createJournalEntryError,
  getJournalEntrySuccess,
  getJournalEntryError,
  getProblemListError,
  getProblemListSuccess,
  getProblemListForDaySuccess,
  getProblemListForDayError,
} from './calendarActions';
import {createJournal, getJournal, getProblems, getProblemsForDate} from '../../api/auth';

export function* watchCreateMyJournal() {
  yield takeEvery(CALENDAR.CREATE_JOURNAL_ENTRY, function*(payload) {
    try {
      const response = yield call(createJournal, payload);
      if (response.data.status === 'success') {
        yield put(createJournalEntrySuccess(response.data.journal));
      }
    } catch (e) {
      yield put(createJournalEntryError(e));
    }
  });
}

export function* watchGetJournalForDate() {
  yield takeEvery(CALENDAR.GET_JOURNAL_ENTRY, function*(payload) {
    try {
      const response = yield call(getJournal, payload);
      if (response.data.status === 'success') {
        yield put(getJournalEntrySuccess(response.data.journal));
      } else {
        yield put(getJournalEntryError(response.data.message));
      }
    } catch (e) {
      yield put(getJournalEntryError(e));
    }
  });
}

export function* watchGetProblemList() {
  yield takeEvery(CALENDAR.GET_PROBLEM_LIST, function*(payload) {
    try {
      const response = yield call(getProblems, payload);
      if (response.data.status === 'success') {
        yield put(getProblemListSuccess(response.data.problem_list));
      } else {
        yield put(getProblemListError(response.data.message));
      }
    } catch (e) {
      yield put(getProblemListError(e));
    }
  });
}

export function* watchGetProblemListForDate() {
  yield takeEvery(CALENDAR.GET_PROBLEMS_FOR_DATE, function*(payload) {
    try {
      const response = yield call(getProblemsForDate, payload);
      if (response.data.status === 'success') {
        yield put(getProblemListForDaySuccess(response.data.problem_details));
      } else {
        yield put(getProblemListForDayError(response.data.message));
      }
    } catch (e) {
      yield put(getProblemListForDayError(e));
    }
  });
}
