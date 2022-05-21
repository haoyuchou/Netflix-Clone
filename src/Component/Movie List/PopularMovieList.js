import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const PopularMovieList = () => {
  return (
    <MoviesList title="Popular Movie" fetchRequest={requests.fetchPopularMovie} movieOrtv="movie"/>
  );
};

export default PopularMovieList;