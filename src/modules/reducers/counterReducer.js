import { SET_COUNT } from '../actions/types';

export default (state = 1, action) => {
  switch (action.type) {
    case SET_COUNT:
      return action.payload;
    default:
      return state;
  }
};
