import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export default createStore(rootReducer, {}, enhancer);
