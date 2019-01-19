import axios from 'axios';
import { popularApi } from '../api';
import { apikey } from '../config/axiosConfig';

export const getPopular = async () => {
  try {
    const res = await axios.get(popularApi(), { params: apikey });
    return res;
  } catch {
    return false;
  }
};
