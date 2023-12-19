import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MOVIE, MovieStateType, MovieType } from "./types";
const movieInitialState: MovieStateType = {
  movie: {
    movie: null,
    isLoading: false,
    errors: "",
  },
};
export const movieSlice = createSlice({
  name: MOVIE,
  initialState: movieInitialState,
  reducers: {
    getMovieAction: (
      state: MovieStateType,
      { payload: id }: PayloadAction<string | undefined>
    ) => {
      state.movie.isLoading = true;
      state.movie.errors = "";
    },
    getMovieSuccessAction: (
      state: MovieStateType,
      { payload: movie }: PayloadAction<MovieType>
    ) => {
      state.movie.isLoading = false;
      state.movie.movie = { ...movie };
    },
    getMovieErrorAction: (
      state: MovieStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.movie.isLoading = false;
      state.movie.errors = error;
    },
  },
});
export const { getMovieAction, getMovieErrorAction, getMovieSuccessAction } =
  movieSlice.actions;
export default movieSlice.reducer;
