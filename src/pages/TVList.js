import { Fragment } from "react";
import PopularTVList from "../Component/TV List/PopularTVList";
//import LatestTVList from "../Component/TV List/LatestTVList";
import TopRatedTVList from "../Component/TV List/TopRatedTVList";
import ActionTVList from "../Component/TV List/ActionTVList";
import AnimationTVList from "../Component/TV List/AnimationTVList";
import DramaTVList from "../Component/TV List/DramaTVList";
import DocumentaryTVList from "../Component/TV List/DocumentaryTVList";

const TVList = () => {
  return (
    <Fragment>
      <PopularTVList />
      <TopRatedTVList />
      <ActionTVList />
      <AnimationTVList />
      <DramaTVList />
      <DocumentaryTVList />
    </Fragment>
  );
};

export default TVList;
