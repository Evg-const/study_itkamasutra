import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


const inicialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})


export const getMyProfile = () => {
    return (dispatch) => {
       return authApi.getMyProfile().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}


export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getMyProfile());
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message }));
        }
    });
}

export const logout = () => (dispatch) => {
    authApi.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;