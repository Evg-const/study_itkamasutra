import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElement = props.dialogs.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElement = props.dialogs.message.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>

    )
}

export default Dialogs;