import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "./styles/bootstrap/css/bootstrap.min.css";
import "./styles/bootstrap/css/bootstrap-theme.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
