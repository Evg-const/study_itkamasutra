import s from './ProfileInfo.module.css'
import Preloader from "../../../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={s.content}>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
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