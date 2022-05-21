//!!!!!id, backdrop_path, poster_path, movie or tv

import { APIkey } from "../../request";
const axios = require("axios");

const Movie = (props) => {
  const { id, movieOrtv, backdrop_path, original_name, overview, vote_average } = props;

  //const dispatch = useDispatch();

  let youtubeKey = "";
  let youtube = "";
  const clickMovieHandler = () => {
    axios
      .get(
        `http://api.themoviedb.org/3/${movieOrtv}/${id}/videos?api_key=${APIkey}`
        //what if the return doesn't have a youtube video
      )
      .then(function (response) {
        // handle success
        youtubeKey = response.data.results[0].key;
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .then(function () {
        // always executed
        //if the youtube key is invalid?
        if (youtubeKey) {
          youtube =
            "https://www.youtube.com/watch?v=" +
            youtubeKey +
            "&origin=http://localhost:3000";
          //my local host is http not https, that's the problem
          //Use props.onClick to pass youtube url?
          props.onClick(youtube, id, backdrop_path, original_name, overview, vote_average);
        } else {
          props.onClick(false, id);
        }

        //dispatch(trailerActions.setYoutubeAddress(youtube));
        //dispatch(trailerActions.movieIsClicked());
      });
  };
  return (
    <div className={props.className}>
      <img
        src={props.poster_path}
        alt="This is for lastest trending movie"
        onClick={clickMovieHandler}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Movie;
