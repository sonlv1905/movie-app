import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import {
  getMovieSuccessAction,
  getMovieErrorAction,
  getMovieAction,
} from "./slice";
import axios, { AxiosResponse } from "axios";
import { GET_MOVIE_BY_ID, MovieType } from "./types";
import options from "../../helpers/api_config";

function* getMovieSaga({ payload: id }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<MovieType> = yield axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    console.log("response", response);
    yield put(getMovieSuccessAction(response.data));
  } catch (error) {
    yield put(getMovieErrorAction("error"));
  }
}

export function* watchGetMovie() {
  yield takeLatest(getMovieAction().type, getMovieSaga);
}
