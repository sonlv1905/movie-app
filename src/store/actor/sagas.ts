import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import {
  getActorAction,
  getActorSuccessAction,
  getActorErrorAction,
} from "./slice";
import axios, { AxiosResponse } from "axios";
import { ActorType } from "./types";
import options from "../../helpers/api_config";

function* getActorSaga({ payload: id }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<ActorType> = yield axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    console.log("response", response);
    yield put(getActorSuccessAction(response.data));
  } catch (error) {
    yield put(getActorErrorAction("error"));
  }
}

export function* watchGetActor() {
  yield takeLatest(getActorAction().type, getActorSaga);
}
