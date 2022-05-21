import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trailerId: null,
  youtubeAddress: null,
  movieGenre: "",
  backdrop_path: "",
  original_name: "",
  overview: "",
  vote_average: null,
};

const trailerSlice = createSlice({
  name: "trailer",
  initialState: initialState,
  reducers: {
    movieIsClicked(state, action) {
      state.youtubeAddress = action.payload.youtube;
      state.trailerId = action.payload.id;
      state.backdrop_path = action.payload.backdrop_path;
      state.original_name = action.payload.original_name;
      state.overview = action.payload.overview;
      state.vote_average = action.payload.vote_average;
    },

    /*setYoutubeAddress(state, action) {
      //need to handle if we didn't get a trailer back
      state.youtubeAddress = action.payload;
      console.log(state.youtubeAddress);
    },*/

    setMovieGenre(state, action) {
      state.movieGenre = action.payload;
    },
  },
});

export const trailerActions = trailerSlice.actions;
export default trailerSlice.reducer;
