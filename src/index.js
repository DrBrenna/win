import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import routeConfig from './router/index'
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider  store={store} >
          <Router routes={routeConfig} history={browserHistory}></Router>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();