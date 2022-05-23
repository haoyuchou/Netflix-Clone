import classes from "./MoviesList.module.css";
import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trailerActions } from "../../store/trailer-slice";
import { moviesAction } from "../../store/movies-slice";
import Movie from "./Movie";
import Modal from "../UI/Modal";
import TrailerModal from "../Trailer Modal/TrailerModal";
//import ReactPlayer from "react-player";
//import requests from "../request";
const axios = require("axios");

//let initial = true;

const MoviesList = (props) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [movieIsClicked, setMovieIsClicked] = useState(false);
  const { fetchRequest, title, movieOrtv } = props;

  // For Trailer Modal
  //const trailreURL = useSelector((state) => state.trailer.youtubeAddress); //youtube address
  const movieGenre = useSelector((state) => state.trailer.movieGenre);

  const dispatch = useDispatch();

  // fetch the list of movie or tv
  useEffect(() => {
    /*if (initial) {
      initial = false;
      return;
    }*/

    const fetchMovieHandler = async () => {
      try {
        const response = await axios.get(fetchRequest);
        console.log(response);
        const data = await response.data.results;
        /*if(title === "Trending"){
          console.log("IT is trending, save it to redux")
        }*/
        setResults(data);
        //save movie data to reducers
        dispatch(moviesAction.addMovies({ title: title, movieData: data })); //in case for search feature
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };
    //this run twice, need to fix
    fetchMovieHandler(fetchRequest);
  }, [fetchRequest, dispatch, title]);

  const showTrailerHandler = (
    youtube,
    id,
    backdrop_path,
    original_name,
    overview,
    vote_average
  ) => {
    setMovieIsClicked(true);
    dispatch(
      trailerActions.movieIsClicked({
        youtube: youtube,
        id: id,
        backdrop_path: backdrop_path,
        original_name: original_name,
        overview: overview,
        vote_average: vote_average,
      })
    );
    dispatch(trailerActions.setMovieGenre(title));
  };

  const modalCloseHandler = () => {
    setMovieIsClicked(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = movieIsClicked ? "hidden" : "auto";
  }, [movieIsClicked]);

  return (
    <Fragment>
      {error && <p>Something went wrong when fetching {title}</p>}
      {!error && (
        <div className={classes["trendMovie-container"]}>
          <h2 className={classes["movie-title"]}>{title}</h2>
          <div className={classes["movieList-container"]}>
            {results.map((movie) => {
              const src = "https://image.tmdb.org/t/p/w185" + movie.poster_path; //movie poster_path
              const mediaType = movie.media_type; // only trending category have
              return (
                <Movie
                  key={Math.random() * results.length}
                  className={classes["movie-box"]}
                  onClick={showTrailerHandler}
                  poster_path={src}
                  id={movie.id}
                  movieOrtv={mediaType ? mediaType : movieOrtv}
                  backdrop_path={movie.backdrop_path}
                  original_name={
                    movie.original_name ? movie.original_name : movie.title
                  }
                  overview={movie.overview}
                  vote_average={movie.vote_average}
                />
              );
            })}
          </div>
          <div className={classes.trailer}>
            {movieIsClicked && movieGenre === title && (
              <Modal onClose={modalCloseHandler}>
                <TrailerModal />
              </Modal>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MoviesList;
