export const imagePath = (url: string, size = 185): string =>
  `http://image.tmdb.org/t/p/w${size}/${url}`;
