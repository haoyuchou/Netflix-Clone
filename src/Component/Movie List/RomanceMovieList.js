import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const RomanceMovieList = () => {
  return (
    <MoviesList title="Romance Movie" fetchRequest={requests.fetchRomanceMovie} movieOrtv="movie"/>
  );
};

export default RomanceMovieList;