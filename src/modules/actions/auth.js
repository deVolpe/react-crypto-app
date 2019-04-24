import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';
import { GET_ERROR, SET_CURRENT_USER } from './types';

export const register = (user, history) => dispatch => {
  axios
    .post('/auth/register', user)
    .then(() => history.push('/login'))
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      });
    });
};

export const login = user => dispatch => {
  axios
    .post('/auth/login', user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(decode));
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decode => ({
  type: SET_CURRENT_USER,
  payload: decode
});
