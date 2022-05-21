import { Fragment } from "react";
import PopularMovieList from "../Component/Movie List/PopularMovieList";
import UpcomingMovieList from "../Component/Movie List/UpcomingMovieList";
import TopRatedMovieList from "../Component/Movie List/TopRatedMovieList";
//import TopRatedTVList from "../Component/TV List/TopRatedTVList";
import ActionMovieList from "../Component/Movie List/ActionMovieList";
import AnimationMovieList from "../Component/Movie List/AnimationList";
import DramaMovieList from "../Component/Movie List/DramaMovieList";
import RomanceMovieList from "../Component/Movie List/RomanceMovieList";

const MovieList = () => {
  return (
    <Fragment>
      <PopularMovieList />
      <UpcomingMovieList />
      <TopRatedMovieList />
      <ActionMovieList />
      <AnimationMovieList />
      <DramaMovieList />
      <RomanceMovieList />
    </Fragment>
  );
};

export default MovieList;
