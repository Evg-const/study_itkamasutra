import React from "react";
import style from '../../users.module.css'
import UserImage from '../../../../assets/Image/UserImage.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span
                            className={props.currentPage === p && style.selectedPage}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>
                                {`${p} `}
                            </span>;
                    })
                }
            </div>

            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : UserImage}
                                         className={style.userPhoto}/>
                                 </NavLink>
                            </div>
                        </span>
                        <span>
                            <div>
                                <button disabled={props.isFollowingInProgress.some(id => id === u.id)}
                                        onClick={ () => { props.toggleFollow(u.id, u.followed)}}
                                > {u.followed ? 'Unfollow' : ' Follow'} </button>

                            </div>
'                        </span>
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

export default Users