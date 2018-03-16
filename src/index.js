import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import routeConfig from './router/index'
import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
    <Router routes={routeConfig} history={browserHistory}></Router>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();