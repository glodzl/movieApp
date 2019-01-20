const API_KEY: string = 'api_key';
const MOVIE_DB_API_KEY: string = 'cc0f3deac833d283a230b440f5e7d753';

export const apikey: any = {
  [API_KEY]: MOVIE_DB_API_KEY,
};

export const searchText = (text: string): any => ({
  query: text,
});
