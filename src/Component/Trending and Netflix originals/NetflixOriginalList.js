import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";

const NetflixOriginalList = () => {
  //This genre can be both tv and movie
  return (
    <MoviesList title="Netflix Original" fetchRequest={requests.fetchNetflixOriginal} movieOrtv="tv"/>
  );
};

export default NetflixOriginalList;
