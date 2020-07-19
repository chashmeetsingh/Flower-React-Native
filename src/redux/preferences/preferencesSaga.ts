import {call, put, takeEvery} from "@redux-saga/core/effects";
import {PREFERENCES} from "../../constants/actionTypes";
import {setPreferencesError, setPreferencesSuccess} from "./preferencesActions";
import {setPreferences} from "../../api/preference";

export function* watchSavePreferences() {
    yield takeEvery(PREFERENCES.SAVE_PREFERENCES, function*(preferenceData) {
        const {preferences} = preferenceData;
        yield call(handleSetPreferences, preferences);
    });
}

function* handleSetPreferences(preferences) {
    // yield put(resetBirthControlPreferences())
    try {
        const setPreferences = yield call(setPreferences, preferences);
        yield put(setPreferencesSuccess(setPreferences));
    } catch (e) {
        yield put(setPreferencesError(e));
    }
}