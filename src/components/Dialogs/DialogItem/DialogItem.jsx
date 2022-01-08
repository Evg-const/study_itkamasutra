import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div>
            <div>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
        </div>
    )
}

export default DialogItem;