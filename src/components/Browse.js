import React from "react";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import SecodaryContainer from "./SecodaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div className="relative">
      <Header />
      <MainContainer />
      <SecodaryContainer />
    </div>
  );
};
export default Browse;
