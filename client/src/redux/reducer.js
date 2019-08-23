//Setting initial state
const initialState = {
    user: null
}

//Definition of Actions
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

//Define Reducer
export default (state=initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, user: action.payload}
        case LOGOUT:
            return {...state, user: null}
        default:
            return state
    }
}
//Define Actions (Will return an object that will contain a type and optionally a payload)
export const login = userInfo => {
    return {
        type: LOGIN,
        payload: userInfo
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}