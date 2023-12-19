import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ACTOR, ActorStateType, ActorType } from "./types";
const movieInitialState: ActorStateType = {
  actor: {
    actor: null,
    isLoadingActor: false,
    errors: "",
  },
};
export const actorSlice = createSlice({
  name: ACTOR,
  initialState: movieInitialState,
  reducers: {
    getActorAction: (
      state: ActorStateType,
      { payload: id }: PayloadAction<string | undefined>
    ) => {
      state.actor.isLoadingActor = true;
      state.actor.errors = "";
    },
    getActorSuccessAction: (
      state: ActorStateType,
      { payload: actor }: PayloadAction<ActorType>
    ) => {
      state.actor.isLoadingActor = false;
      state.actor.actor = { ...actor };
    },
    getActorErrorAction: (
      state: ActorStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.actor.isLoadingActor = false;
      state.actor.errors = error;
    },
  },
});
export const { getActorAction, getActorSuccessAction, getActorErrorAction } =
  actorSlice.actions;
export default actorSlice.reducer;
