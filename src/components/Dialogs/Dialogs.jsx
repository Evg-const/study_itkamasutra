import s from "./Dialogs.module.css"
import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControl/FormControls";
import {maxLength, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messageElement = props.message.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessage)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                {messageElement}
            </div>
        </div>
    )
}

const maxLength50= maxLength(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessage"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>
                    Add
                </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'message'})(AddMessageForm)

export default Dialogs;