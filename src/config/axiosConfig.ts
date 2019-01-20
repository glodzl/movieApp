const API_KEY: string = 'api_key';
const MOVIE_DB_API_KEY: string = 'cc0f3deac833d283a230b440f5e7d753';

export const YOUTUBE_API_KEY: string =
  'AIzaSyBiib2QGNt4r-Ev7bGbrgYeql-O7E7--nw';

export const movieDbApikeyObject: any = {
  [API_KEY]: MOVIE_DB_API_KEY,
};

export const searchText = (text: string): any => ({
  query: text,
});
