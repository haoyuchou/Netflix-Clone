import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const DramaMovieList = () => {
  return (
    <MoviesList title="Drama Movie" fetchRequest={requests.fetchDramaMovie} movieOrtv="movie"/>
  );
};

export default DramaMovieList;