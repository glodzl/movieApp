import { combineReducers } from 'redux';
import { popularReducer } from './popular';
import { favouritesReducer } from './favourites';
import { searchReducer } from './search';

export default combineReducers({
  popular: popularReducer,
  favourites: favouritesReducer,
  search: searchReducer,
});
