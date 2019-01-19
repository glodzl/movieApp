import { combineReducers } from 'redux';
import { favouritesReducer } from './favourites';
import { genresReducer } from './genre';

export default combineReducers({
  favourites: favouritesReducer,
  genres: genresReducer,
});
