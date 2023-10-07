import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ data }) => {
  return (
    <div className="relative flex flex-col">
      <img
        src={IMAGE_CDN_URL + data?.poster_path}
        className="w-72 rounded-md h-44 object-cover relative z-0"
        alt={data?.title}
      />
      <div className="w-72 absolute rounded-md h-44 bg-gradient-to-t from-black text-xl text-white font-semibold">
        <div className="absolute z-10 bottom-4 left-4">{data?.title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
