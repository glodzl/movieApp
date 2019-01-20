import axios from 'axios';
import { genreApi } from '../api';
import { apikey } from '../config/axiosConfig';

export const getGenre = async (): Promise<any> => {
  try {
    const res = await axios.get(genreApi(), { params: apikey });
    return res;
  } catch {
    return false;
  }
};
