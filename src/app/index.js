import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import './index.css';
import saga from './saga';
import redditSoundApp from './reducer';
import App from './App';

let sagaMiddleware = createSagaMiddleware();
let store = createStore(
    redditSoundApp,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
