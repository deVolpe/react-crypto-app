import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';
import { GET_ERROR, SET_CURRENT_USER } from './types';

export const signUp = (user, push) => (dispatch) => {
  axios
    .post('/api/auth/register', user)
    .then(() => push('/auth/login'))
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data,
      });
    });
};

export const signIn = (user, push) => (dispatch) => {
  axios
    .post('/api/auth/login', user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(token));
      push('/main/cards');
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data,
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(null);
  dispatch(setCurrentUser(null));
};

export const setCurrentUser = token => ({
  type: SET_CURRENT_USER,
  payload: token,
});
