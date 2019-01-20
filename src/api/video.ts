import { baseURL } from './baseURL';

export const videoApi = (movieId: string | number): string =>
  `${baseURL}/movie/${movieId}/videos`;
