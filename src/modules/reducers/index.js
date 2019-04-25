import { combineReducers } from 'redux';
import counter from './counterReducer';
import auth from './authReducer';
import cryptoCards from './cryptoCardReducer';
import error from './errorReducer';

export default combineReducers({
  counter,
  auth,
  cryptoCards,
  error
});
