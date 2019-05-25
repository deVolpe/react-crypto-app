import axios from 'axios';
import { GET_ALL_CARDS, SET_NEW_CARD, DELETE_SELECTED_CARD } from './types';
import { getError } from './error';

export const getAllCryptoCards = () => (dispatch) => {
  axios('/api/main/cards/all')
    .then((res) => {
      dispatch({
        type: GET_ALL_CARDS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    });
};

export const createCard = card => (dispatch) => {
  axios
    .post('/api/main/cards/new', card)
    .then((res) => {
      dispatch({ type: SET_NEW_CARD, payload: res.data });
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    });
};

export const deleteCard = id => (dispatch) => {
  axios
    .delete('/api/main/cards/delete', { data: { id } })
    .then((res) => {
      dispatch({
        type: DELETE_SELECTED_CARD,
        payload: res.data._id,
      });
    })
    .catch((err) => {
      dispatch(getError(err.response.data));
    });
};
