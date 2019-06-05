import { combineReducers } from 'redux';
import auth from './authReducer';
import cryptos from './cryptoReducer';
import error from './errorReducer';
import filter from './filterReducer';
import counter from './counterReducer';

export default combineReducers({
  auth,
  cryptos,
  counter,
  error,
  filter
});
