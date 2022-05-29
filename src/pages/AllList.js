import { Fragment } from "react";
import TrendingMovieList from "../Component/Trending and Netflix originals/TrendingMovieList";
import NetflixOriginalList from "../Component/Trending and Netflix originals/NetflixOriginalList";
import UpcomingMovieList from "../Component/Movie List/UpcomingMovieList";
//import LatestTVList from "../Component/TV List/LatestTVList";
import PopularMovieList from "../Component/Movie List/PopularMovieList";
import PopularTVList from "../Component/TV List/PopularTVList";
import TopRatedMovieList from "../Component/Movie List/TopRatedMovieList";
import TopRatedTVList from "../Component/TV List/TopRatedTVList";

const AllList = () => {
  return (
    <Fragment>
      <TrendingMovieList />
      <NetflixOriginalList />
      <UpcomingMovieList />
      <PopularMovieList />
      <PopularTVList />
      <TopRatedMovieList />
      <TopRatedTVList />
    </Fragment>
  );
};

export default AllList;
