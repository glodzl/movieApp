import { baseURL } from './baseURL';

export const detailsApi = (movieId: string | number): string =>
  `${baseURL}/movie/${movieId}`;
