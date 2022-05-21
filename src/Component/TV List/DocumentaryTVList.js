import MoviesList from "../Fetch Movie and TV/MoviesList";
import requests from "../../request";
const DocumentaryTVList = () => {
  return (
    <MoviesList
      title="Documentary TV"
      fetchRequest={requests.fetchDocumentaryTV}
      movieOrtv="tv"
    />
  );
};

export default DocumentaryTVList;