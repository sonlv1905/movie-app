import { all, fork } from "redux-saga/effects";
import { watchGetMovie } from "./movie/sagas";
import { watchGetActor } from "./actor/sagas";
import { watchTrailerMovie } from "./trailer/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchGetMovie),
    fork(watchGetActor),
    fork(watchTrailerMovie),
    // Other forks
  ]);
};

export default rootSaga;
