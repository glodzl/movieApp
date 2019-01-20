import axios from 'axios';
import { genreApi } from '../api';
import { movieDbApikeyObject } from '../config';

export const getGenre = async (): Promise<any> => {
  try {
    const res = await axios.get(genreApi(), { params: movieDbApikeyObject });
    return res;
  } catch {
    return false;
  }
};
