import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

let post = [
    {text: 'My first post', likeCounts: '0'},
    {text: 'My second post', likeCounts: '2'},
    {text: 'My third post', likeCounts: '3'},
    {text: 'Azazazaz', likeCounts: '999'},
]

let postElements = post.map(p =>  <Post text={p.text} likeCounts ={p.likeCounts} />)


const MyPosts = () => {
    return (
        <div className={s.MyPost}>
            <input/>
            <button>Add</button>
            {postElements}
        </div>
    )
}
export default MyPosts;