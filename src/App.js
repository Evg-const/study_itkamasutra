import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React, { Suspense, lazy } from 'react';
//import UsersContainer from "./components/UsersContainer/UsersContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer/ProfileContainer"));
const UsersContainer = lazy(() => import("./components/UsersContainer/UsersContainer"));





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
                    <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                        {/*<Route path="/news" element={<Dialogs/>}/>*/}
                        {/*<Route path="/music" element={<Dialogs/>}/>*/}
                        {/*<Route path="/settings" element={<Dialogs/>}/>*/}
                    </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
            connect(mapStateToProps,
                {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;