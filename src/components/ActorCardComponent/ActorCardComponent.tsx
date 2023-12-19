import { URL_IMAGE } from "../../helpers/api_url";
import { CastType } from "../../store/actor/types";
import "./ActorCard.scss";
type ActorProps = {
  actor: CastType;
};

export default function ActorCardComponent({ actor }: ActorProps) {
  return (
    <>
      <div className="actor-card__item">
        <div className="actor-card__item-img">
          <img src={`${URL_IMAGE}${actor.profile_path}`} alt="" />
        </div>
        <p className="actor-card__item-name">{actor.name}</p>
      </div>
    </>
  );
}
