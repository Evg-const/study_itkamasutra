import React from "react";
import style from "./FormControls.module.css"

const FormControl = ({input, meta, FormType, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <FormType {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}


export const Textarea = (props) => {
    return <FormControl {...props} FormType="textarea"/>
}

export const Input = (props) => {
    return <FormControl {...props} FormType="input"/>
}

