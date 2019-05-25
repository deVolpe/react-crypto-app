import { GET_ERROR } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ERROR:
      return action.payload;
    default:
      return state;
  }
}
