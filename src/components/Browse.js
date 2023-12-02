import React from "react";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import SecodaryContainer from "./SecodaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  const showGptSearch = useSelector((state) => state?.gptSearch?.gptSearch);
  return (
    <div className="relative">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecodaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
