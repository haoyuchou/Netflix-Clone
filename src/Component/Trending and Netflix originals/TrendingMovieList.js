import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const TrendingMovieList = () => {
  //This genre can be both tv and movie
  return (
    <MoviesList title="Trending" fetchRequest={requests.fetchTrending} movieOrtv="movie"/>
  );
};

export default TrendingMovieList;
