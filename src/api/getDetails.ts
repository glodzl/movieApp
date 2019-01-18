import { baseURL } from './baseURL';

export const getDetails = movieId => `${baseURL}/${movieId}`;
