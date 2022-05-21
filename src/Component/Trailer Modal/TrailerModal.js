// need placeholder for backdrop_path, original_name, overview, vote_average

import classes from "./TrailerModal.module.css";

const TrailerModal = (props) => {
  const { backdrop_path, name, overview, vote_average } = props;
  const backdropPathURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  // have to check if there is backrop path return by api
  return (
    <div className={classes["trailer-modal"]}>
      <div
        className={classes["trailer-img-container"]}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)) ,url(${backdropPathURL})`,
          backgroundSize: "cover",
          height: "400px",
          maxWidth: "100%",
          zIndex: 40,
        }}
      ></div>
      <div>
        <p>Name: {name ? name : "Sorry, we don't have the name of this movie or tv"}</p>
        <p>Overview: {overview ? overview: "Sorry, we don't have the overview of this movie or tv"}</p>
        <p>Vote Average: {vote_average ? vote_average : "Sorry, we don't have the voting average of this movie or tv"}</p>
      </div>
    </div>
  );
};

export default TrailerModal;
/*style={{
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)) ,url(${movieBackDrop.url})`,
    backgroundSize: "cover",
    height: "600px",
    zIndex: "-1",
  }}*/
