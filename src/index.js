import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DashboardScreen from './screens/dashboard';
// import LoginPage from './pages/login/login-page';
// import App from './App';
// import HookExample from './HookExample';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// eslint-disable-next-line no-undef
ReactDOM.render(<DashboardScreen />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
