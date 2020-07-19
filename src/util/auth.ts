import configureStore from "../redux/store";


export function getState() {
    const state  = configureStore().store.getState()
    return state;
}

export function getAuthToken() {
    const state = getState();
    debugger
    return state.auth.userToken;
}
