import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import {
  getTrailerAction,
  getTrailerErrorAction,
  getTrailerSuccessAction,
} from "./slice";
import axios, { AxiosResponse } from "axios";
import { TrailerType } from "./types";
import options from "../../helpers/api_config";

function* getTrailerSaga({ payload: id }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<TrailerType> = yield axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    console.log("trailer", response);
    yield put(getTrailerSuccessAction(response.data));
  } catch (error) {
    yield put(getTrailerErrorAction("error"));
  }
}

export function* watchTrailerMovie() {
  yield takeLatest(getTrailerAction().type, getTrailerSaga);
}
