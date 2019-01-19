import { baseURL } from './baseURL';

export const videoApi = movieId => `${baseURL}/movie/${movieId}/videos`;
