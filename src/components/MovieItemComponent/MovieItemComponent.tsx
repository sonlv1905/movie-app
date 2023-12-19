import { Link } from "react-router-dom";
import { URL_IMAGE } from "../../helpers/api_url";
import "./MovieItem.scss";
import { useDispatch } from "react-redux";
import { addMovieAction } from "../../store/favourite/slice";

type MovieProps = {
  movie: any;
};

export default function MovieItemComponent({ movie }: MovieProps) {
  const dispatch = useDispatch();
  const addToPlayList = () => {
    dispatch(addMovieAction(movie));
  };
  return (
    <>
      <div className="movie-item">
        <div className="movie-item__img">
          <img src={`${URL_IMAGE}${movie.backdrop_path}`} alt="" />
        </div>
        <div className="movie-item__title">{movie.overview}</div>
        <div className="movie-item__action">
          <button onClick={addToPlayList}>Add</button>
          <Link to={`/detail-movie/${movie.id}`} className="more-info">
            More Information
          </Link>
        </div>
      </div>
    </>
  );
}
