import axios from 'axios';
import { videoApi } from '../api';
import { apikey } from '../config/axiosConfig';

export const getVideo = async id => {
  try {
    const res = await axios.get(videoApi(id), { params: apikey });
    return res;
  } catch {
    return false;
  }
};
