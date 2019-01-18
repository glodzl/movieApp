import axios from 'axios';

export const setAxiosHeader = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
