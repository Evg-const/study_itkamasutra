import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from './App'
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<SamuraiJSApp/>, document.getElementById('root'));

