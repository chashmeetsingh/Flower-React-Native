import {PREFERENCES} from "../../constants/actionTypes";

export const preferenceReducer = (state = {}, action) => {
    switch (action.type) {
        case PREFERENCES.SET_PREFERENCES:
            return {...state, preferences:action.preferences}
        case PREFERENCES.SET_PREFERENCES_SUCCESS:
            return {...state, preferencesSuccess: action.response}
        case PREFERENCES.SET_PREFERENCES_ERROR:
            return {...state,preferencesError: action.error}
        case PREFERENCES.SET_BIRTH_CONTROL_PREFERENCES:
            return {...state,birthControlOptions: action.preferences}
        case PREFERENCES.RESET_BIRTH_CONTROL_PREFERENCES:
            return {...state,birthControlOptions: []}
        case PREFERENCES.SAVE_PREFERENCES:
            return  {...state, preferences: action.preferences}
        default:
            return  state;
    }
};