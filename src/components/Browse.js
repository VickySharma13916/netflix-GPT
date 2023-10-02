import React from "react";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import SecodaryContainer from "./SecodaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div className="relative">
      <Header />
      <MainContainer />
      <SecodaryContainer />
    </div>
  );
};
export default Browse;
