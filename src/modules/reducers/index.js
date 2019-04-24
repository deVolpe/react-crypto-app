import { combineReducers } from 'redux';
import counter from './counterReducer';
import auth from './authReducer';
import cryptoCard from './cryptoCardReducer';
import error from './errorReducer';

export default combineReducers({
  counter,
  auth,
  cryptoCard,
  error
});
