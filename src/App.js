import s from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import React from "react";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <div className={s.appWrapperHeader}>
                    <Header/>
                </div>
                <div className={s.appWrapperNavigation}>
                    <Navbar/>
                </div>

                <div className={s.appWrapperContent}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    {/*<Route path="/news" element={<Dialogs/>}/>*/}
                    {/*<Route path="/music" element={<Dialogs/>}/>*/}
                    {/*<Route path="/settings" element={<Dialogs/>}/>*/}
                </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
