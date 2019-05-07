import axios from 'axios';
import {
  GET_ERROR,
  GET_ALL_CARDS,
  SET_NEW_CARD,
  DELETE_SELECTED_CARD,
  CANCEL_REQUEST
} from './types';

const CancelToken = axios.CancelToken;

export const getAllCryptoCards = () => dispatch => {
  axios('/main/cards', {
    cancelToken: new CancelToken(cancel => {
      dispatch({
        type: CANCEL_REQUEST,
        payload: cancel
      });
    })
  })
    .then(res => {
      dispatch({
        type: GET_ALL_CARDS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      });
    });
};

export const createCard = card => dispatch => {
  axios
    .post('/api/main/cards', card)
    .then(res => {
      dispatch({ type: SET_NEW_CARD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.data });
    });
};

export const deleteCard = id => dispatch => {
  axios
    .delete('/api/main/cards', id)
    .then(res => {
      dispatch({
        type: DELETE_SELECTED_CARD,
        payload: res.data.id
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.data });
    });
};
