import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, text: 'My first post', likeCounts: 0},
        {id: 2, text: 'My second post', likeCounts: 2},
        {id: 3, text: 'My third post', likeCounts: 3},
        {id: 4, text: 'Azazazaz', likeCounts: 999},
    ]
};

test('length of post should be incremented', () => {

    // 1. Start data
    let action = addPost("test post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect (newState.posts.length).toBe(5);
});

test('text in new post should be correct', () => {
    let action = addPost("test post")

    let newState = profileReducer(state, action)
    expect (newState.posts[4].text).toBe("test post");
});

test('likes counter in new post = 0', () => {
    let action = addPost("test post")

    let newState = profileReducer(state, action)
    expect (newState.posts[4].likeCounts).toBe(0);
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost (1);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(3);
});

test('after deleting length dont should be decrement if id is not correct', () => {
    let action = deletePost (0);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(4);
});