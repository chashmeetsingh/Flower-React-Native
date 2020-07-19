import {put, call, takeEvery} from 'redux-saga/effects';
import {THEME} from '../../constants/actionTypes';
import {setTheme} from './themeActions';

export function* watchSetTheme() {
  yield takeEvery(THEME.CHANGE_THEME, function*(themeData) {
    const {themeColor} = themeData;
    yield call(handleSetTheme, themeColor);
  });
}

function* handleSetTheme(themeColor: string) {
  yield put(setTheme(themeColor));
}
