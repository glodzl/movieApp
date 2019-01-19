import { FAVOURITE_ADD, FAVOURITE_REMOVE } from '../actions/favourite';

export const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case FAVOURITE_ADD: {
      return [...state, action.payload];
    }
    case FAVOURITE_REMOVE: {
      return state.filter(element => element.id !== action.payload.id);
    }
    default:
      return state;
  }
};
