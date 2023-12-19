import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieAction } from "../../store/movie/slice";
import { useParams } from "react-router-dom";
import { StateType } from "../../store/root-reducer";
import "./DetailMovie.scss";
import { URL_IMAGE } from "../../helpers/api_url";
import { getActorAction } from "../../store/actor/slice";
import ActorCardComponent from "../../components/ActorCardComponent/ActorCardComponent";
import { CastType } from "../../store/actor/types";
import Loading from "../Loading/Loading";
import { getTrailerAction } from "../../store/trailer/slice";
import { MovieType } from "../../store/movie/types";
import { addMovieAction } from "../../store/favourite/slice";

export default function DetailComponent() {
  const { movie, isLoading } = useSelector(
    (state: StateType) => state.movie.movie
  );
  const { actor, isLoadingActor } = useSelector(
    (state: StateType) => state.actor.actor
  );
  const { trailer, isLoadingTrailer } = useSelector(
    (state: StateType) => state.trailer.trailer
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieAction(id));
    dispatch(getActorAction(id));
    dispatch(getTrailerAction(id));
  }, [id]);

  const handleAdd = (movie: MovieType) => {
    dispatch(addMovieAction(movie));
  };

  return (
    <>
      {isLoading && isLoadingActor && isLoadingTrailer ? (
        <Loading />
      ) : (
        movie && (
          <div className="movie">
            <div className="movie-detail">
              <div className="movie-detail__poster">
                <img src={`${URL_IMAGE}${movie?.poster_path}`} alt="" />
              </div>
              <div className="movie-detail__content">
                <h1 className="title">{movie?.original_title}</h1>
                <p className="overview">
                  <b>Over View:</b> {movie?.overview}
                </p>
                <p className="popularity">
                  <b>Popularity:</b> {movie?.popularity}
                </p>
                <p className="release">
                  <b>Release Date:</b>
                  {movie?.release_date}
                </p>
                <h3>Actor:</h3>
                <div className="list-actor">
                  {actor &&
                    actor.cast &&
                    actor.cast.map((cast: CastType, index: number) =>
                      index < 5 ? (
                        <ActorCardComponent actor={cast} key={cast.id} />
                      ) : (
                        ""
                      )
                    )}
                </div>
                <button onClick={() => handleAdd(movie)}>
                  Add to Watchlist
                </button>
              </div>
            </div>
            <div className="movie-trailer">
              <h2>Trailer</h2>
              <div className="frame">
                <iframe
                  width="100%"
                  height="800"
                  src={`https://www.youtube.com/embed/${trailer?.results[0].key}?si=${trailer?.results[0].id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
