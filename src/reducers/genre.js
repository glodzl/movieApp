import { GENRE_ADD } from '../actions/genre';

export const genresReducer = (state = [], action) => {
  switch (action.type) {
    case GENRE_ADD: {
      return action.payload;
    }
    default:
      return state;
  }
};
