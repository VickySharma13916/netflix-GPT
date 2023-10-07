import React from "react";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MovieList = ({ title, movieData, backgroundColor }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="px-12 py-8" style={{ backgroundColor: backgroundColor }}>
      <h1 className="text-xl text-white font-semibold pb-4">{title}</h1>
      <Slider {...settings}>
        {movieData?.map((item) => {
          return (
            <div className="flex flex-col flex-wrap" key={item?.id}>
              <MovieCard data={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieList;
