import { useEffect, useState } from "react";
import { URL_IMAGE } from "../../helpers/api_url";
import options from "../../helpers/api_config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieAction } from "../../store/favourite/slice";
export default function BannerComponent() {
  const [banner, setBanner] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setBanner(response.results[0]))
      .catch((err) => console.error(err));
  }, []);
  const handlePlay = () => {
    navigate(`/detail-movie/${banner.id}`);
  };

  const addToPlayList = () => {
    dispatch(addMovieAction(banner));
  };
  return (
    <>
      <div className="banner">
        <img src={`${URL_IMAGE}${banner?.backdrop_path}`} alt="banner" />
        <div className="banner-action">
          <div className="banner-title">{banner.title}</div>
          <p className="banner-content">{banner.overview}</p>
          <div className="banner-buttons">
            <button className="play" onClick={addToPlayList}>
              Add to Watchlist
            </button>
            <button className="information" onClick={handlePlay}>
              More Information
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
