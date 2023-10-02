import React from "react";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id, title }) => {
  //Fetch trailer of the movie
  useFetchMovieTrailer(id);
  const trailerKey = useSelector((state) => state.movie?.trailerVideo);
  console.log(trailerKey);
  return (
    <div className="my-4">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey?.key}?&autoplay=1&mute=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
