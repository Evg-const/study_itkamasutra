import * as React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.spacedesk.net/wp-content/themes/datronic/img/logo_spacedesk.png'
                 alt="Logo"/>

            <div className={s.loginBlock}>
                <div>
                    {props.isAuth
                        ? <div>
                            <div>{props.login}</div>
                            <div>{props.isAuth && <button onClick={props.logout}>Log out</button>}</div>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}
export default Header;