import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";
const DramaTVList = () => {
  return (
    <MoviesList
      title="Drama TV"
      fetchRequest={requests.fetchDramaTV}
      movieOrtv="tv"
    />
  );
};

export default DramaTVList;