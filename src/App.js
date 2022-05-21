import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import requests from "./request";
import AllList from "./pages/AllList";
import Header from "./Component/Header/Header";
import Nav from "./Component/UI/Nav";
import TVList from "./pages/TVList";
import MovieList from "./pages/MovieList";
//import MoviesList from "./Component/Fetch Movie and TV/MoviesList";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Header header={requests.fetchTrending} />
          <AllList />
        </Route>
        <Route path="/movie">
          <Nav />
          <MovieList />
        </Route>
        <Route path="/tv">
          <Nav />
          <TVList />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
