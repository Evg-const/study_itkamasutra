import React from "react";
import style from './users.module.css'
import * as axios from "axios"
import UserImage from '../../../src/assets/Image/UserImage.png'

const UsersOLD = (props) => {

    let getUsers = () =>{
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }



    // props.setUsers([
    //     {
    //         id: 1,
    //         photoURL: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/eac905d6-a5b8-4ce4-aff2-0c565a923fa7/360",
    //         followed: true,
    //         fullName: "Van",
    //         status: "i'm boss of this gym",
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoURL: "https://yt3.ggpht.com/ytc/AKedOLRIQQeH6FCjmJxrh2jS2xsfarD6JnClqMqcCH-Q=s900-c-k-c0x00ffffff-no-rj",
    //         followed: false,
    //         fullName: "Billy",
    //         status: "i'm dungeon master",
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         photoURL: "https://avatars.mds.yandex.net/get-zen_doc/1904927/pub_5db08e14fbe6e700af4b2bad_5db08f1574f1bc00b047c2d2/scale_1200",
    //         followed: false,
    //         fullName: "Ricardo",
    //         status: "i'm performance artist",
    //         location: {city: 'Boston', country: 'USA'}
    //     }
    // ])

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UserImage} className={style.userPhoto}/>
                        </div>
                    </span>
                    <span>
                        <div>
                            <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}> {u.followed ? 'Unfollow' : 'Follow'} </button>

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default UsersOLD;