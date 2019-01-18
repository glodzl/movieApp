import { baseURL } from './baseURL';

export const getDetails = movieId => `${baseURL}/${movieId}`;
export const getPopular = () => `${baseURL}/popular`;
