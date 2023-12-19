export type MovieType = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
  revenue: number;
  popularity: number;
};

export type IMovieType = {
  movie: MovieType | null;
  isLoading: boolean;
  errors: string;
};

export type MovieStateType = {
  movie: IMovieType;
};

export const MOVIE = "movie";
export type MOVIE = typeof MOVIE;

export const GET_MOVIE_BY_ID = `${MOVIE}/getMovieByIdAction`;
export type GET_MOVIE_BY_ID = typeof GET_MOVIE_BY_ID;
