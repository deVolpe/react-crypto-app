import {
  SET_NEW_CARD,
  GET_ALL_CARDS,
  DELETE_SELECTED_CARD,
} from '../actions/types';

const initialState = {
  cards: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARDS:
      return { ...state, cards: action.payload };

    case SET_NEW_CARD:
      return { ...state, cards: [...state.cards, action.payload] };

    case DELETE_SELECTED_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload),
      };

    default:
      return state;
  }
};
