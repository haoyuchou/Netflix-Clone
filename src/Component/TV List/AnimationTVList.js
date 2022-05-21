import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";
const AnimationTVList = () => {
  return (
    <MoviesList
      title="Animation TV"
      fetchRequest={requests.fetchAnimationTV}
      movieOrtv="tv"
    />
  );
};

export default AnimationTVList;
