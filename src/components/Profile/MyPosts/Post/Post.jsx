import * as React from "react";
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.post}>

            <img src='https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg'
                 alt="User's avatar"/>
            <span>{props.text}</span>
            <div>Like counts: {props.likeCounts} </div>
        </div>
    )
}
export default Post;