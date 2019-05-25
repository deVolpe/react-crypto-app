import { FILTER_LIST } from '../actions/types';

const initialState = {
  term: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LIST:
      return { ...state, term: action.payload };
    default:
      return state;
  }
};
