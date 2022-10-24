import React from "react";
import Paginator from "../../../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div>
            <Paginator
                totalCount={props.totalCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}/>

            <div>
                {
                props.users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        toggleFollow={props.toggleFollow}
                        isFollowingInProgress={props.isFollowingInProgress}/>)
            }
            </div>
        </div>
    )
}

export default Users