import { GENRE_ADD } from '../actions';

export const initialState = [];

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENRE_ADD: {
      return action.payload;
    }
    default:
      return state;
  }
};
