import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import './sass/main.scss';
import './vendor/font-awesome/scss/font-awesome.scss';

/* Main Component */
import App from './components/App';

/* Reducers */
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('app'));