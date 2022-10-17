import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormControls";


function MyPosts(props) {

    console.log("RENDER")

    let postElements = props.posts.map(p => <Post key={p.id} text={p.text} likeCounts={p.likeCounts}/>)

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.MyPost}>
            <AddPostFormRedux onSubmit={addPost}/>
            {postElements}
        </div>
    )
}


const maxLength15 = maxLength(15);

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newPostText"}
                    placeholder={"Enter your post"}
                    validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'post'})(addPostForm)


export default MyPosts;