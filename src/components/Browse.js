import React from "react";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import SecodaryContainer from "./SecodaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecodaryContainer />
      {/* {
        main Container
        - video playback
        - videoTitle
        secondaryContainer
        -MovieList * n
          -Cards * n
      } */}
    </div>
  );
};
export default Browse;
