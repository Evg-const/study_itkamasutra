import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


let dialogsData =[
    {id: "1", name: "Van"},
    {id: "2", name: "Billy"},
    {id: "3", name: "Ricardo"}
    ]

let messageData=[
    {message: "Boy next door"},
    {message: "Boss of the gym"},
    {message: "300 bucks"}
]


let dialogsElement = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
let messageElement = messageData.map(m => <Message message={m.message}/>)



const Dialogs = () => {
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