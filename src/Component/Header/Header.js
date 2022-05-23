import { useState, useEffect } from "react";

import classes from "./Header.module.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Nav from "../UI/Nav";
import requests from "../../request";
const axios = require("axios");

//let initail = true;
const Header = () => {
  const [movieBackDrop, setMovieBackDrop] = useState({});
  // Make a request for a user with a given ID
  // I can refactor to save all the fetchRequest into redux ?
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
  });

  useEffect(() => {
    /*if (initail) {
      initail = false;
      return;
    }*/
    const loadMovieBackdrop = async () => {
      try {
        const response = await axios.get(requests.fetchTrending);
        const randomNum = Math.floor(Math.random() * 20);
        const movie = await response.data.results[randomNum];
        console.log(response.data.results[randomNum]);
        setMovieBackDrop((prev) => {
          const title = movie.title ? movie.title : movie.original_name;
          return {
            url: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
            title: title,
            overview: movie.overview,
          };
        });
        //setBackgroundImage(`https://image.tmdb.org/t/p/original/&{}`)
        //console.log(movieBackDrop);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadMovieBackdrop();
  }, []);

  //console.log(movieBackDrop.url);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)) ,url(${movieBackDrop.url})`,
        backgroundSize: "cover",
        height: "600px",
        zIndex: "-1",
      }}
    >
      <Nav />
      <div className={classes["movie-info-container"]}>
        <div className={classes["movie-title"]}>
          <p>{movieBackDrop.title}</p>
        </div>
        <div className={classes["movie-button"]}>
          <ThemeProvider theme={theme}>
            <div className={classes.button}>
              <Button variant="contained" size="large">
                Play
              </Button>
            </div>
            <div>
              <Button variant="contained" size="large">
                My List
              </Button>
            </div>
          </ThemeProvider>
        </div>
        <div className={classes["movie-overview"]}>
          <p>{movieBackDrop.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
