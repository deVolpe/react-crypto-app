import axios from 'axios';
import { SET_COUNT } from './types';

export const setCount = id => dispatch => {
  const count = value => {
    axios.patch('/api/main/cards/change', { id, value } ).then(() => {
      dispatch({
        type: SET_COUNT,
        payload: value
      });
    });
  };
  return count;
};
