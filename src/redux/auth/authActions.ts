import {AUTH} from '../../constants/actionTypes';
import {signIn} from '../../api/auth';
import {verifyEmail as verify,signUp as signUpUser} from '../../api/auth'
import {setTheme} from "../theme/themeActions";

export function login(user) {
  return dispatch => {
    signIn(user)
      .then(res => {
        dispatch(loginSuccess(res));
      })
      .catch(error => {
        dispatch(loginError(error));
      });
  };
}

export function resetLogin() {
  return {
    type: AUTH.RESET_AUTH,
  };
}

export function loginSuccess(response) {
  return {
    type: AUTH.LOGIN_SUCCESS,
    response,
  };
}

export function setUserData(response) {
  return {
    type: AUTH.USER_DATA,
    response:response.data,
  };
}

export function setAuthToken(token) {
  return {
    type: AUTH.USER_TOKEN,
    token,
  };
}

export function loginError(error) {
  return {
    type: AUTH.LOGIN_ERROR,
    error,
  };
}

export function verifyEmail(data) {
  return (dispatch) => {
    dispatch(resetVerifyEmailStatus());
     verify(data).then(response => {
      dispatch(verifyEmailStatus(false));
    }).catch(error => {
      dispatch(verifyEmailStatus(true));
    })
  }
}

export function verifyEmailStatus(status: boolean) {
  return {
    type: AUTH.VERIFY_EMAIL_STATUS,
    status,
  };
}

export function resetVerifyEmailStatus() {
  return {
    type: AUTH.RESET_VERIFY_EMAIL_STATUS,
  };
}

export function setSignUpData(data) {
  return {
    type: AUTH.SET_SIGN_UP_DATA,
    data,
  };
}

export function signUp(signUpData) {
  return dispatch => {
    signUpUser(signUpData).then(res => {
      dispatch(setUserData(res));
      dispatch(setTheme(res.data.color))
      dispatch(setAuthToken(res.headers['x-user-token']))
      dispatch(signUpSuccess(res))
    }).catch(error => {
      dispatch(signUpError(error));
    })
  }
}

export function signUpSuccess(response) {
  return {
    type: AUTH.SIGN_UP_SUCCESS,
    response,
  };
}

export function signUpError(error) {
  return {
    type: AUTH.SIGN_UP_ERROR,
    error,
  };
}

export function forgotPassword(forgotPasswordData) {
  return {
    type: AUTH.FORGOT_PASSWORD,
    forgotPasswordData,
    email: forgotPasswordData.user.email,
  };
}

export function forgotPasswordSuccess(response, forgotPasswordData) {
  return {
    type: AUTH.FORGOT_PASSWORD_SUCCESS,
    response,
    email: forgotPasswordData.user.email,
  };
}

export function forgotPasswordError(error) {
  return {
    type: AUTH.FORGOT_PASSWORD_ERROR,
    error,
  };
}

export function resetForgotPassword() {
  return {
    type: AUTH.RESET_FORGOT_PASSWORD,
  };
}

export function changePassword(changePassword) {
  return {
    type: AUTH.CHANGE_PASSWORD,
    changePassword,
  };
}

export function changePasswordSuccess(response) {
  return {
    type: AUTH.CHANGE_PASSWORD_SUCCESS,
    response,
  };
}

export function changePasswordError(error) {
  return {
    type: AUTH.CHANGE_PASSWORD_ERROR,
    error,
  };
}
