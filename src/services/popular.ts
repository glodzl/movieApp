import axios from 'axios';
import { popularApi } from '../api';
import { apikey } from '../config/axiosConfig';

export const getPopular = async (page: number): Promise<any> => {
  const pageParam = {
    page,
  };
  try {
    const res = await axios.get(popularApi(), {
      params: { ...apikey, ...pageParam },
    });
    return res;
  } catch {
    return false;
  }
};
