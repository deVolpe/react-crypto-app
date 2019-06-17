import { combineReducers } from 'redux';
import auth from './authReducer';
import cryptos from './cardsReducer';
import error from './errorReducer';
import filter from './filterReducer';

export default combineReducers({
  auth,
  cryptos,
  error,
  filter,
});
