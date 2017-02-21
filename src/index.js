import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/style.scss';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
// Router
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('app')
);