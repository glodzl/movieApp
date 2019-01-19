import axios from 'axios';
import { movieApi } from '../api';
import { apikey, searchText } from '../config/axiosConfig';

export const searchMovie = async text => {
  try {
    const res = await axios.get(movieApi(), {
      params: { ...apikey, ...searchText(text) },
    });
    return res;
  } catch {
    return false;
  }
};
