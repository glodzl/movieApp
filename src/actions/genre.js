export const GENRE = '[Genre]';
export const GENRE_ADD = `${GENRE} ADD`;

export const addGenre = payload => ({
  type: GENRE_ADD,
  payload,
});
