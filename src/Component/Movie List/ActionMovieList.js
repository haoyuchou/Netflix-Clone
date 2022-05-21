import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const ActionMovieList = () => {
  return (
    <MoviesList title="Action Movie" fetchRequest={requests.fetchActionMovie} movieOrtv="movie"/>
  );
};

export default ActionMovieList;