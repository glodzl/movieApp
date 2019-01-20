import axios from 'axios';
import { popularApi } from '../api';
import { movieDbApikeyObject } from '../config';

export const getPopular = async (page: number): Promise<any> => {
  const pageParam = {
    page,
  };
  try {
    const res = await axios.get(popularApi(), {
      params: { ...movieDbApikeyObject, ...pageParam },
    });
    return res;
  } catch {
    return false;
  }
};
