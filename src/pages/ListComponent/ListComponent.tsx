import BannerComponent from "../../components/BannerComponent/BannerComponent";

export default function ListComponent() {
  return (
    <>
      <BannerComponent />
      <div className="content">
        <div className="list-movie">
          <div className="movie-item">
            <div className="movie-item__img">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/475d527e-432e-4708-a032-54a56c2de7b6/nike-just-do-it.jpg"
                alt=""
              />
            </div>
            <div className="movie-item__title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              exercitationem dolores vitae enim ratione dignissimos illum, saepe
              tempora nam quas culpa ipsa maiores? Rem sequi placeat explicabo
              repellendus. Culpa, commodi!
            </div>
            <div className="movie-item__action">
              <button className="add-cart">Add To Cart</button>
              <button className="more-info">More Information</button>
            </div>
          </div>
          <div className="movie-item">
            <div className="movie-item__img">
              {/* <img src={`${URL_IMAGE}${banner?.backdrop_path}`} alt="" /> */}
            </div>
            <div className="movie-item__title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              exercitationem dolores vitae enim ratione dignissimos illum, saepe
              tempora nam quas culpa ipsa maiores? Rem sequi placeat explicabo
              repellendus. Culpa, commodi!
            </div>
            <div className="movie-item__action">
              <button className="add-cart">Add To Cart</button>
              <button className="more-info">More Information</button>
            </div>
          </div>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r_pUE7OcN8w?si=dwnLkhvw3XEuz3BX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
