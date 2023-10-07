import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addPopularMovies,
  addTopRatedMovies,
  addNowPlayingMovies,
  addVideoTrailer,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
