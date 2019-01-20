import axios from 'axios';
import { searchMovieApi } from '../api';
import { movieDbApikeyObject, searchText } from '../config';

export const searchMovie = async (text: string): Promise<any> => {
  try {
    const res = await axios.get(searchMovieApi(), {
      params: { ...movieDbApikeyObject, ...searchText(text) },
    });
    return res;
  } catch {
    return false;
  }
};
