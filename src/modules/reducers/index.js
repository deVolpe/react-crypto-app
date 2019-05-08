import { combineReducers } from 'redux';
import counter from './counterReducer';
import auth from './authReducer';
import cryptos from './cryptoReducer';
import error from './errorReducer';

export default combineReducers({
  counter,
  auth,
  cryptos,
  error
});
