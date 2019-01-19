import { baseURL } from './baseURL';

export const getDetails = movieId => `${baseURL}/movie/${movieId}`;
export const getPopular = () => `${baseURL}/movie/popular`;
