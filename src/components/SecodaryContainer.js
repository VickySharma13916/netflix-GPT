import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecodaryContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  return (
    <div className="relative z-50">
      <MovieList title={"Now Playing"} movieData={nowPlayingMovies} />
      {/* {
        movie list popular
            Movie Card Horizontally * n
        movie list now playing
        movie list trending
    } */}
    </div>
  );
};

export default SecodaryContainer;
