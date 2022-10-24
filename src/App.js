import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import {Route, Routes} from "react-router-dom"
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className={s.appWrapper}>
                <div className={s.appWrapperHeader}>
                    <HeaderContainer/>
                </div>
                <div className={s.appWrapperNavigation}>
                    <Navbar/>
                </div>

                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                        {/*<Route path="/news" element={<Dialogs/>}/>*/}
                        {/*<Route path="/music" element={<Dialogs/>}/>*/}
                        {/*<Route path="/settings" element={<Dialogs/>}/>*/}
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
            connect(mapStateToProps,
                {initializeApp}))(App);

