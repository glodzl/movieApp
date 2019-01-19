import { baseURL } from './baseURL';

export const detailsApi = movieId => `${baseURL}/movie/${movieId}`;
