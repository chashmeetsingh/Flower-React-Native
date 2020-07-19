import {all} from 'redux-saga/effects';
import {watchSetTheme} from './theme/themeSaga';
import {watchChangePassword, watchForgotPassword, watchLogin, watchSignUp, watchVerifyEmail} from './auth/authSaga';
import {getMyJournals, getArticles, getForums} from './dashboard/dashboardSaga';
import {watchSavePreferences} from './preferences/preferencesSaga';
import {
  watchCreateMyJournal,
  watchGetJournalForDate,
  watchGetProblemList,
  watchGetProblemListForDate
} from "./calendar/calendarSaga";

export default function* rootSaga() {
  yield all([
    watchSetTheme(),
    watchLogin(),
    watchSignUp(),
    watchSavePreferences(),
    getMyJournals(),
    getArticles(),
    getForums(),
    watchVerifyEmail(),
    watchForgotPassword(),
    watchChangePassword(),
    watchCreateMyJournal(),
    watchGetJournalForDate(),
    watchGetProblemList(),
    watchGetProblemListForDate(),
  ]);
}
