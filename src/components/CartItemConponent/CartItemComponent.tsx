import { useDispatch } from "react-redux";
import { URL_IMAGE } from "../../helpers/api_url";
import { MovieType } from "../../store/movie/types";
import "./CartItem.scss";
import { deleteMovieAction } from "../../store/favourite/slice";
type ItemProps = {
  movie: MovieType;
};
export default function CartItemConponent({ movie }: ItemProps) {
  const dispatch = useDispatch();
  const handleDelete = (movie: MovieType) => {
    dispatch(deleteMovieAction(movie));
  };
  return (
    <>
      <div className="cart-item">
        <div className="cart-item__img">
          <img src={`${URL_IMAGE}${movie.backdrop_path}`} alt="" />
        </div>
        <div className="cart-item__content">
          <div className="cart-item__content-title">{movie.original_title}</div>
          <div className="cart-item__content-popularity">
            Popularity: {movie.popularity}
          </div>
          <div className="cart-item__content-date">
            Release Date: {movie.release_date}
          </div>
        </div>
        <div className="cart-item__action">
          <button onClick={() => handleDelete(movie)}>X</button>
        </div>
      </div>
    </>
  );
}
