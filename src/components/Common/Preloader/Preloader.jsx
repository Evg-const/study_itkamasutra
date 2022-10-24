import spinner from "../../../assets/spinner.svg";
import React from "react";

const Preloader = () => {
    return (
        <div>
            <img src={spinner}
                 alt="Spinner"/>
        </div>
    )
}
export default Preloader

