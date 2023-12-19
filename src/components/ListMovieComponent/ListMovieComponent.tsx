import { useEffect, useState } from "react";
import MovieItemComponent from "../MovieItemComponent/MovieItemComponent";
import options from "../../helpers/api_config";
import axios from "axios";
type ListProp = {
  type: string;
  page: number;
};
export default function ListMovieComponent(props: ListProp) {
  const { type, page } = props;
  const [listMovie, setListMovie] = useState<any>([]);
  useEffect(() => {
    const fetchData = async (type: string, config: any) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`,
          config
        );
        setListMovie(response.data.results.splice(0, 8));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(type, options);
  }, [type, page]);
  return (
    <>
      <div className="list-movie">
        {listMovie &&
          listMovie.map((movie: any) => (
            <MovieItemComponent key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
}
