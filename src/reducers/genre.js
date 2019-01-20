import { GENRE_ADD } from '../actions';

export const genresReducer = (state = [], action) => {
  switch (action.type) {
    case GENRE_ADD: {
      return action.payload;
    }
    default:
      return state;
  }
};
