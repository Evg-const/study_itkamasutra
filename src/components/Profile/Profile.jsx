import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";




const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText ={props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost={props.addPost}
            />
        </div>
    )
}
export default Profile;