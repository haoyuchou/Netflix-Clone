import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";
const ActionTVList = () => {
  return (
    <MoviesList
      title="Action & Adventure TV"
      fetchRequest={requests.fetchActionTV}
      movieOrtv="tv"
    />
  );
};

export default ActionTVList;
