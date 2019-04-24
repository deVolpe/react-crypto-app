import { INC, DEC } from '../actions/types';

export default function(state = 1, action) {
  switch (action.type) {
    case INC:
      return state + 1;

    case DEC:
      return state - 1;

    default:
      return state;
  }
}