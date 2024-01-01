import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearch: false,
    gptMovieList: null,
    gptMoviename: null,
  },
  reducers: {
    toogleGptSearchView: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptMovie: (state, action) => {
      const { gptMovies, moviename } = action.payload;
      state.gptMovieList = gptMovies;
      state.gptMoviename = moviename;
    },
  },
});

export const { toogleGptSearchView, addGptMovie } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
