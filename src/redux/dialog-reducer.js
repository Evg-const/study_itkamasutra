const ADD_MESSAGE = 'ADD_MESSAGE';

let inicialDialogState = {
    dialogs: [
        {id: 1, name: "Van"},
        {id: 2, name: "Billy"},
        {id: 3, name: "Ricardo"}
    ],
    message: [
        {id: 1, message: "Boy next door"},
        {id: 2, message: "Boss of the gym"},
        {id: 3, message: "300 bucks"}
    ],
}

const dialogReducer = (state = inicialDialogState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                message: [{id: 4, message: action.newMessage}, ...state.message]
            };
        default:
            return state;
    }
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage} )

export default dialogReducer;