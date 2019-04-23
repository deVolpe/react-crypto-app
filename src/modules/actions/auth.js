import axios from 'axios';

import { GET_ERROR } from './types';

export const register = (user, history) => {
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

export const login = user => {
  axios
    .post('/auth/login', user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setUser();
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      });
    });
};

export const setUser = decode => ({ type: 'SET_USER', payload: decode });
