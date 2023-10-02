import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movieData = useSelector((state) => state.movie?.nowPlayingMovies);
  if (!movieData) return;
  const mainMovie = movieData?.[0];
  const { original_title, title, overview, id } = mainMovie;
  return (
    <div className="relative">
      <div className="absolute z-10 container mx-auto">
        <VideoTitle
          title={title}
          overview={overview}
          original_title={original_title}
        />
      </div>
      <div className="absolute z-0 w-full">
        <VideoBackground id={id} title={title} />
      </div>
    </div>
  );
};

export default MainContainer;
