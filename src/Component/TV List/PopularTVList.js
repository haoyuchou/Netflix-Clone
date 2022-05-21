import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";
const PopularTVList = () => {
  return (
    <MoviesList title="Popular TV" fetchRequest={requests.fetchPopularTV} movieOrtv="tv"/>
  );
};

export default PopularTVList;