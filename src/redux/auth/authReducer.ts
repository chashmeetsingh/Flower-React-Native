import {AUTH} from '../../constants/actionTypes';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTH.LOGIN_SUCCESS:
            return {...state, isLoggedIn: action.response};
        case AUTH.USER_DATA:
            return {...state, user: action.response};
        case AUTH.LOGIN_ERROR:
            return {...state, loginError: action.error};
        case AUTH.RESET_AUTH:
            return {...state, user: null, isLoggedIn: null, loginError: null}
        case AUTH.SET_SIGN_UP_DATA:
            return {...state, signUpData: action.data};
        case AUTH.SIGN_UP_SUCCESS:
            return {...state, signUpSuccess: action.response}
        case AUTH.SIGN_UP_ERROR:
            return {...state, signUpError: action.error}
        case AUTH.VERIFY_EMAIL_STATUS:
            return {...state, verifyEmailStatus: action.status}
        case AUTH.RESET_VERIFY_EMAIL_STATUS:
            return {...state, verifyEmailStatus: null}
        case AUTH.FORGOT_PASSWORD_SUCCESS:
            return {...state, forgotPasswordSuccess: action.response,forgotPasswordEmail: action.email}
        case AUTH.FORGOT_PASSWORD_ERROR:
            return {...state, forgotPasswordError: action.error}
        case AUTH.RESET_FORGOT_PASSWORD:
            return {...state, forgotPasswordError: null,forgotPasswordSuccess:null}
        case AUTH.USER_TOKEN:
            console.log(action.token);
            return {...state, userToken: action.token}
        default:
            return state;
    }
};
