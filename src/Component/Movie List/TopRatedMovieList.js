import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const TopRatedMovieList = () => {
  return (
    <MoviesList
      title="Top Rated Movie"
      fetchRequest={requests.fetchTopRatedMovie}
      movieOrtv="movie"
    />
  );
};

export default TopRatedMovieList;
