let renderEntireTree = ()=>{
    console.log('state was changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'My first post', likeCounts: 0},
            {id: 2, text: 'My second post', likeCounts: 2},
            {id: 3, text: 'My third post', likeCounts: 3},
            {id: 4, text: 'Azazazaz', likeCounts: 999 },
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
        ]
    },
}
export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export const subscribe = (observer) =>{
    renderEntireTree = observer;
}


export default state;