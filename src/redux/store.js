import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'My first post', likeCounts: 0},
                {id: 2, text: 'My second post', likeCounts: 2},
                {id: 3, text: 'My third post', likeCounts: 3},
                {id: 4, text: 'Azazazaz', likeCounts: 999},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Van"},
                {id: 2, name: "Billy"},
                {id: 3, name: "Ricardo"}
            ],
            message: [
                {message: "Boy next door"},
                {message: "Boss of the gym"},
                {message: "300 bucks"}
            ],
            newMessage: ''
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}

export default store;

window.store = store;