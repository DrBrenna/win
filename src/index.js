import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import routeConfig from './router/index'



ReactDOM.render(
    <Router routes={routeConfig} history={browserHistory}></Router>
    ,document.getElementById('root'));
registerServiceWorker();