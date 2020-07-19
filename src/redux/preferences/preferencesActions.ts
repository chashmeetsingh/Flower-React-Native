import {PREFERENCES} from "../../constants/actionTypes";
import {setPreferences as onSavePreferences} from '../../api/preference';

export function setPreferences(preferences) {
    return {
        type: PREFERENCES.SET_PREFERENCES,
        preferences
    }
}

export function savePreferences(preferences) {
    return dispatch => {
        onSavePreferences(preferences).then(res => {
            console.log('set preference response ',res)
            dispatch(setPreferencesSuccess(res));
        }).catch(err => {
            console.log('set preference error ',err)
            dispatch(setPreferencesError(err));
        })
    }
}

export function setPreferencesSuccess(response){
    return {
        type: PREFERENCES.SET_PREFERENCES_SUCCESS,
        response
    }
}

export function setPreferencesError(error){
    return {
        type: PREFERENCES.SET_PREFERENCES_ERROR,
        error
    }
}

export function setBirthControlPreferences(preferences) {
    return{
        type: PREFERENCES.SET_BIRTH_CONTROL_PREFERENCES,
        preferences
    }
}

export function resetBirthControlPreferences() {
    return{
        type: PREFERENCES.RESET_BIRTH_CONTROL_PREFERENCES
    }
}
