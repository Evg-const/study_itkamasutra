import s from './ProfileInfo.module.css'
import Preloader from "../../../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserImage from "../../../../../assets/Image/UserImage.png";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }


    return (
        <div className={s.content}>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <img src={props.profile.photos.large || UserImage}
                     alt="User avatar"
                     className={s.userPhoto}
                />
                {props.isOwner && <input type={"file"} accept={".jpg, .jpeg"} onChange={mainPhotoSelected}/>}
            </div>
            <div>{props.profile.fullName}</div>
            <div>Статус: {props.profile.aboutMe}</div>
            <div>Контакты:</div>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.youtube}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.mainLink}</div>


        </div>
    )
}
export default ProfileInfo;