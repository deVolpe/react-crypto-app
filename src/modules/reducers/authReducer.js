import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: token ? true : false
      };
    default:
      return state;
  }
};
