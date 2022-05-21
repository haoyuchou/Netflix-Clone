import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const AnimationMovieList = () => {
  return (
    <MoviesList title="Animation Movie" fetchRequest={requests.fetchAnimationMovie} movieOrtv="movie"/>
  );
};

export default AnimationMovieList;