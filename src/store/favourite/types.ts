import { MovieType } from "../movie/types";
export type FavouriteStateType = {
  favourite: MovieType[];
  isShowToasts: boolean;
  contentToast: string;
  isShowFavourite: boolean;
};
