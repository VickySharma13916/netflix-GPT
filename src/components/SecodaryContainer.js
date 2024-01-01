import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecodaryContainer = () => {
  const Movies = useSelector((state) => state.movie);
  return (
    <div className="relative z-50 md:-mt-72">
      {Movies && (
        <>
          <MovieList
            title={"Now Playing Movies"}
            movieData={Movies?.nowPlayingMovies}
            backgroundColor={"#transparent"}
          />
          <MovieList
            title={"Top Rated Movies"}
            movieData={Movies?.topRatedMovies}
            backgroundColor={"#0e0e0e"}
          />
          <MovieList
            title={"Popular Movies"}
            movieData={Movies?.popularMovies}
            backgroundColor={"#0e0e0e"}
          />
          <MovieList
            title={"Upcoming Movies"}
            movieData={Movies?.upcomingMovies}
            backgroundColor={"#0e0e0e"}
          />
          <MovieList
            title={"Horror Movies"}
            movieData={Movies?.nowPlayingMovies}
            backgroundColor={"#0e0e0e"}
          />
        </>
      )}
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
