import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRAILER, TrailerType, TrailerStateType } from "./types";
const trailerInitialState: TrailerStateType = {
  trailer: {
    trailer: null,
    isLoadingTrailer: false,
    errors: "",
  },
};
export const trailerSlice = createSlice({
  name: TRAILER,
  initialState: trailerInitialState,
  reducers: {
    getTrailerAction: (
      state: TrailerStateType,
      { payload: id }: PayloadAction<string | undefined>
    ) => {
      state.trailer.isLoadingTrailer = true;
      state.trailer.errors = "";
    },
    getTrailerSuccessAction: (
      state: TrailerStateType,
      { payload: trailer }: PayloadAction<TrailerType>
    ) => {
      console.log("trailer", trailer);
      state.trailer.isLoadingTrailer = false;
      state.trailer.trailer = { ...trailer };
    },
    getTrailerErrorAction: (
      state: TrailerStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.trailer.isLoadingTrailer = false;
      state.trailer.errors = error;
    },
  },
});
export const {
  getTrailerAction,
  getTrailerErrorAction,
  getTrailerSuccessAction,
} = trailerSlice.actions;
export default trailerSlice.reducer;
