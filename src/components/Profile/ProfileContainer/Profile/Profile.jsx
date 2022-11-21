import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "../../MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         savePhoto={props.savePhoto}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile;