export interface Movie {
  genre_ids: Array<number>;
  id: number;
  overview: string;
  poster_path?: string;
  release_date?: string;
  title: string;
  vote_average?: number;
}
