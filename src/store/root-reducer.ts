import { actorSlice } from "./actor/slice";
import { ActorStateType } from "./actor/types";
import { favouriteSlice } from "./favourite/slice";
import { FavouriteStateType } from "./favourite/types";
import { movieSlice } from "./movie/slice";
import { MovieStateType } from "./movie/types";
import { trailerSlice } from "./trailer/slice";
import { TrailerStateType } from "./trailer/types";

export type StateType = {
  movie: MovieStateType;
  actor: ActorStateType;
  trailer: TrailerStateType;
  favourite: FavouriteStateType;
};

const rootReducers = {
  movie: movieSlice.reducer,
  actor: actorSlice.reducer,
  trailer: trailerSlice.reducer,
  favourite: favouriteSlice.reducer,
};
export default rootReducers;
