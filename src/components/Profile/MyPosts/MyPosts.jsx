import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let postElements = props.posts.map(p =>  <Post text={p.text} likeCounts ={p.likeCounts} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.MyPost}>
            <div>
                <textarea ref={newPostElement} value={props.newPostText}  onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>
                    Add
                </button>
            </div>


            {postElements}
        </div>
    )
}
export default MyPosts;