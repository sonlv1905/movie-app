export type CastType = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

export type ActorType = {
  cast: CastType[];
};

export type IActorType = {
  actor: ActorType | null;
  isLoadingActor: boolean;
  errors: string;
};

export type ActorStateType = {
  actor: IActorType;
};

export const ACTOR = "actor";
export type ACTOR = typeof ACTOR;
