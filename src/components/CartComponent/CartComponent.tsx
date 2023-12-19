import { useSelector } from "react-redux";
import "./Cart.scss";
import { StateType } from "../../store/root-reducer";
import { MovieType } from "../../store/movie/types";
import CartItemConponent from "../CartItemConponent/CartItemComponent";
export default function CartComponent() {
  const { favourite } = useSelector((state: StateType) => state.favourite);
  return (
    <>
      <div className="cart-list">
        <div className="cart-title">
          <h3>Watchlist</h3>
        </div>
        {favourite.length > 0 ? (
          favourite.map((movie: MovieType) => (
            <CartItemConponent movie={movie} />
          ))
        ) : (
          <div className="cart-list__empty">The Watch list is Empty</div>
        )}
      </div>
    </>
  );
}
