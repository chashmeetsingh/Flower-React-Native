import {API_URL} from '../constants/urls';
import {post} from '../util/httpHandler';
import {getAuthToken} from "../util/auth";



export async function setPreferences(preferences) {
    try {
        const response = await post(API_URL.PREFERENCES, preferences,{headers:{Authorization: `Bearer ${getAuthToken()}`}});
        return response
    } catch (e) {
        throw e
    }
}
