import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

const inicialState = {
    posts: [
        {id: 1, text: 'My first post', likeCounts: 0},
        {id: 2, text: 'My second post', likeCounts: 2},
        {id: 3, text: 'My third post', likeCounts: 3},
        {id: 4, text: 'Azazazaz', likeCounts: 999},
    ],
    profile: null,
    status: ""

}


const profileReducer = (state = inicialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {id: 5, text: action.postText, likeCounts: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText})
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(({data}) => {
            dispatch(setUserProfileSuccess(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setStatus(status));
                    }
                }
            )
    }
}

export default profileReducer;