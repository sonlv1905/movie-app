import BannerComponent from "../../components/BannerComponent/BannerComponent";
import ListMovieComponent from "../../components/ListMovieComponent/ListMovieComponent";

export default function HomeComponent() {
  return (
    <>
      <BannerComponent />
      <div className="content">
        <h2>Now Play List</h2>
        <hr />
        <br />
        <ListMovieComponent type="now_playing" page={1} />
        <br />
        <h2>Popular</h2>
        <hr />
        <br />
        <ListMovieComponent type="popular" page={2} />
        <br />
        <h2>Top Rated</h2>
        <hr />
        <br />
        <ListMovieComponent type="top_rated" page={3} />
        <br />
        <h2>Upcoming</h2>
        <hr />
        <br />
        <ListMovieComponent type="upcoming" page={4} />
      </div>
    </>
  );
}
