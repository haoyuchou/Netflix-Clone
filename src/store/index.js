import { configureStore } from "@reduxjs/toolkit";
import trailerReducer from "./trailer-slice";
import moviesReducer from "./movies-slice";

const store = configureStore({
  reducer: { trailer: trailerReducer, movies: moviesReducer },
});

export default store;
