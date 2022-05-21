import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";
const TopRatedTVList = () => {
  return (
    <MoviesList title="Top Rated TV" fetchRequest={requests.fetchTopRatedTV} movieOrtv="tv"/>
  );
};

export default TopRatedTVList;