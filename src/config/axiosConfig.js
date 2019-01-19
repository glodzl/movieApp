const API_KEY = 'api_key';
const MOVIE_DB_API_KEY = 'cc0f3deac833d283a230b440f5e7d753';

export const apikey = {
  [API_KEY]: MOVIE_DB_API_KEY,
};

export const searchText = text => ({
  query: text,
});
