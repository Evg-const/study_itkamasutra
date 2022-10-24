import React from "react";
import style from '../../users.module.css'
import UserImage from '../../../../assets/Image/UserImage.png'
import {NavLink} from "react-router-dom";

let User = (props) => {

    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos.small : UserImage}
                                 className={style.userPhoto}
                                 alt="User avatar"/>
                         </NavLink>
                    </div>
                </span>
                <span>
                    <div>
                        <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.toggleFollow(props.user.id, props.user.followed)
                                }}
                        > {props.user.followed ? 'Unfollow' : ' Follow'} </button>

                    </div>
'               </span>
                <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{"props.user.location.country"}</div>
                        <div>{"props.user.location.city"}</div>
                    </span>
                </span>
    </div>)
}


export default User