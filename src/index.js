import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from "dotenv";
import './index.css';
import Wrap from "./Wrap"
import * as serviceWorker from './serviceWorker';

dotenv.config();

ReactDOM.render(<Wrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
