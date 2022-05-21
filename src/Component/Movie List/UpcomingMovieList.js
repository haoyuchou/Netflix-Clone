import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const UpcomingMovieList = () => {
  return (
    <MoviesList
      title="Upcoming Movie"
      fetchRequest={requests.fetchUpcomingMovie}
      movieOrtv="movie"
    />
  );
};

export default UpcomingMovieList;
