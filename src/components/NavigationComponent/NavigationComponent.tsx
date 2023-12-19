import { Link } from "react-router-dom";
import "./Navigation.scss";
import CartComponent from "../CartComponent/CartComponent";
import Toasts from "../Toasts/Toasts";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../store/root-reducer";
import { useEffect } from "react";
import {
  toggleFavouriteAction,
  toggleToastAction,
} from "../../store/favourite/slice";
export default function NavigationComponent() {
  const { isShowToasts, contentToast, isShowFavourite } = useSelector(
    (state: StateType) => state.favourite
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const t = setTimeout(() => {
      dispatch(toggleToastAction(false));
    }, 2000);
    return () => {
      clearTimeout(t);
    };
  }, [isShowToasts]);
  const toggleFavourite = () => {
    dispatch(toggleFavouriteAction());
  };
  return (
    <>
      <div className="nav">
        <div className="navigation" id="navigator">
          <div className="navigation__logo">Web Phim</div>
          <div className="navigation__links">
            <Link to="/" className="link--button">
              Home
            </Link>
            <Link to="#" className="link--button">
              List Movie
            </Link>
            <Link to="#" className="link--button">
              Detail
            </Link>
          </div>
          <div className="navigation__information">
            <button className="cart" onClick={toggleFavourite}>
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>

        {isShowFavourite ? <CartComponent /> : <></>}
        {isShowToasts ? <Toasts toast={contentToast} /> : <></>}
      </div>
    </>
  );
}
