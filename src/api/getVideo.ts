import { baseURL } from './baseURL';

export const getVideo = movieId => `${baseURL}/movie/${movieId}/videos`;
