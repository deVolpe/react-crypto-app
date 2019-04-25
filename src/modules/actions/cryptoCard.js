import axios from 'axios';

import {
  GET_ERROR,
  GET_ALL_CARDS,
  SET_NEW_CARD,
  DELETE_SELECTED_CARD
} from './types';

export const getAllCryptoCards = () => dispatch => {
  axios
    .get('/main/cards')
    .then(res => {
      dispatch(getAllCards(res.data));
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
    .post('/api/main/cards/', card)
    .then(res => {
      dispatch(setNewCard(res.data));
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.data });
    });
};

export const deleteCard = card => dispatch => {
  axios
    .delete('/api/main/cards/', card)
    .then(res => {
      dispatch(deleteSelectedCard(res.data.id));
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err.response.data });
    });
};

const getAllCards = cards => ({ type: GET_ALL_CARDS, payload: cards });

const setNewCard = card => ({ type: SET_NEW_CARD, payload: card });

const deleteSelectedCard = id => ({
  type: DELETE_SELECTED_CARD,
  payload: id
});
