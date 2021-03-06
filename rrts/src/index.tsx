import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { App } from './components/App';
import { reducers } from './reducers';

const middlewares = [thunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
