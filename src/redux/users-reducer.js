import {userAPI as userApi, userAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const inicialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

const usersReducer = (state = inicialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.count};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const toggleFollowSuccess = (userID) => ({type: TOGGLE_FOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isProgress,
    userId
})

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const toggleFollow = (userId, isFollow) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        (isFollow ? userApi.unfollow(userId) : userApi.follow(userId)).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleFollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;