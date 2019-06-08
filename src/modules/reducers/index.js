import { combineReducers } from 'redux';
import auth from './authReducer';
import cryptos from './cryptoReducer';
import error from './errorReducer';
import filter from './filterReducer';

export default combineReducers({
  auth,
  cryptos,
  error,
  filter,
});
