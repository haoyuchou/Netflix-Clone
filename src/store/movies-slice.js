import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
}

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        addMovies(state, action){
            //find if the movie already in reducer
            const movieIndex = state.movies.findIndex(movie => movie.title === action.payload.title);
            if (movieIndex){
                state.movies[movieIndex] = action.payload;
            }
            else{
                state.movies.push(action.payload);
            }
            // the action have the movie data, and the genre title
            //action.payload.title  action.payload.movieData

        }
    }
})

export const moviesAction = moviesSlice.actions;
export default moviesSlice.reducer;