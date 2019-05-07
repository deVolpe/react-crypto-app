import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';
import { GET_ERROR, SET_CURRENT_USER } from './types';

export const signUp = (user, history) => dispatch => {
  axios
    .post('/api/auth/register', user)
    .then(() => history.push('/login'))
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      });
    });
};

export const signIn = user => dispatch => {
  axios
    .post('/api/auth/login', user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: token
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      });
    });
};

export const logout = history => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(null);
  dispatch({
    type: SET_CURRENT_USER,
    payload: null
  });
  history.push('/login');
};
