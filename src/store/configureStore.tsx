import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import initialState from './initialState';
var createLogger = require('redux-logger');

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, createLogger)
  );
}
