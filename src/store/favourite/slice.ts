import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FavouriteStateType } from "./types";
import { MovieType } from "../movie/types";
const movieInitialState: FavouriteStateType = {
  favourite: [],
  isShowToasts: false,
  contentToast: "",
  isShowFavourite: false,
};
export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: movieInitialState,
  reducers: {
    addMovieAction: (
      state: FavouriteStateType,
      { payload: movie }: PayloadAction<MovieType>
    ) => {
      const temp = state.favourite.filter(
        (movi: MovieType) => movi.id === movie.id
      );
      if (temp.length === 0) {
        state.favourite.push(movie);
        state.isShowToasts = true;
        state.contentToast = "Add To Watchlist Success";
      } else {
        state.isShowToasts = true;
        state.contentToast = "The movie is existed in Watchlist";
      }
    },
    deleteMovieAction: (
      state: FavouriteStateType,
      { payload: movie }: PayloadAction<MovieType>
    ) => {
      const temp = state.favourite.filter(
        (movi: MovieType) => movi.id !== movie.id
      );
      state.favourite = [...temp];
    },
    toggleToastAction: (
      state: FavouriteStateType,
      { payload: status }: PayloadAction<boolean>
    ) => {
      state.isShowToasts = status;
    },
    toggleFavouriteAction: (state: FavouriteStateType) => {
      state.isShowFavourite = !state.isShowFavourite;
    },
  },
});
export const {
  addMovieAction,
  toggleToastAction,
  toggleFavouriteAction,
  deleteMovieAction,
} = favouriteSlice.actions;
export default favouriteSlice.reducer;
