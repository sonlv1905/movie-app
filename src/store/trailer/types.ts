export type TrailerMovieType = {
  id: number;
  name: string;
  key: string;
};

export type TrailerType = {
  results: TrailerMovieType[];
};

export type ITrailerType = {
  trailer: TrailerType | null;
  isLoadingTrailer: boolean;
  errors: string;
};

export type TrailerStateType = {
  trailer: ITrailerType;
};

export const TRAILER = "trailer";
export type TRAILER = typeof TRAILER;
