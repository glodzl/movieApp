import axios from 'axios';
import { videoApi } from '../api';
import { movieDbApikeyObject } from '../config';

export const getVideo = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(videoApi(id), { params: movieDbApikeyObject });
    return res;
  } catch {
    return false;
  }
};
