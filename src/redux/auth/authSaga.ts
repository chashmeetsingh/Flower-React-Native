import {put, call, takeEvery,takeLatest} from 'redux-saga/effects';
import {AUTH} from '../../constants/actionTypes';

import {
  setUserData,
  loginSuccess,
  loginError,
  signUpSuccess,
  signUpError,
  resetLogin,
  verifyEmailStatus,
  resetVerifyEmailStatus,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetForgotPassword, changePasswordSuccess, changePasswordError, setAuthToken,
} from './authActions';

import {changePassword, forgotPassword, signIn, signUp, verifyEmail} from '../../api/auth';
import {setTheme} from "../theme/themeActions";

export function* watchLogin() {
  yield takeLatest(AUTH.LOGIN, function*(authData) {
    const {user} = authData;
    yield call(handleLogin, user);
  });
}

function* handleLogin(user: User) {
  yield put(resetLogin());
  try {
    const authResponse = yield call(signIn, user)
    yield put(setUserData(authResponse.data));
    yield put(setAuthToken(authResponse.headers['x-user-token']));
    yield put(setTheme(authResponse.data.color));
    yield put(loginSuccess(true));
  } catch (e) {
    yield put(loginSuccess(false));
    yield put(loginError(e));
  }
}

export function* watchVerifyEmail() {
  // yield takeEvery(AUTH.VERIFY_EMAIL, function*(verifyEmail) {
  //   const user = verifyEmail.data;
  //   yield call(handleVerifyEmail, user);
  // });
}

function* handleVerifyEmail(data) {
  // yield put(resetVerifyEmailStatus());
  // try {
  //   yield call(verifyEmail, data);
  //   yield put(verifyEmailStatus(true));
  // } catch (e) {
  //   yield put(verifyEmailStatus(false));
  // }
}

export function* watchSignUp() {
  yield takeEvery(AUTH.SIGN_UP, function*(signUp) {
    const {signUpData} = signUp;
    yield call(handleSignUp, signUpData);
  });
}

function* handleSignUp(signUpData) {
  try {
    const authResponse = yield call(signUp, signUpData);
    yield put(signUpSuccess(authResponse.data));
  } catch (e) {
    yield put(signUpError(e));
  }
}

export function* watchForgotPassword() {
  yield takeEvery(AUTH.FORGOT_PASSWORD, function*(forgotPassword) {
    const {forgotPasswordData} = forgotPassword;
    console.log('forgotPasswordData', forgotPasswordData)
    yield call(handleForgotPassword, forgotPasswordData);
  });
}

function* handleForgotPassword(forgotPasswordData) {
  yield put(resetForgotPassword())
  try {
    const forgotPasswordResponse = yield call(forgotPassword, forgotPasswordData);
    yield put(forgotPasswordSuccess(forgotPasswordResponse,forgotPasswordData));
  } catch (e) {
    yield put(forgotPasswordError(e));
  }
}

export function* watchChangePassword() {
  yield takeEvery(AUTH.CHANGE_PASSWORD,function* (changePasswordData) {
    const {changePassword} = changePasswordData;
    console.log('changePassword', changePassword)
    yield call(handleChangePassword, changePassword);
  })
}

function* handleChangePassword(changePasswordData) {
  try {
    const changePasswordResponse = yield call(changePassword, changePasswordData);
    yield put(changePasswordSuccess(changePasswordResponse));
  } catch (e) {
    yield put(changePasswordError(e));
  }
}
