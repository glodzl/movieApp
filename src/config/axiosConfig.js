import axios from 'axios';

const API_KEY = 'api_key';
const MOVIE_DB_API_KEY = 'cc0f3deac833d283a230b440f5e7d753';
export const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/';

export const apikey = {
  params: {
    [API_KEY]: MOVIE_DB_API_KEY,
  },
};
