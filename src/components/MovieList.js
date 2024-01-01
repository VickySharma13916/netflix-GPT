import React from "react";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MovieList = ({ gpt, title, movieData, backgroundColor }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div
      className={`${gpt ? "container mx-auto pb-8" : "px-12 py-8"}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`text-xl text-white font-semibold pb-4 ${gpt && "relative"}`}
      >
        {title}
      </div>
      <Slider {...settings}>
        {movieData?.map((item) => {
          return <MovieCard key={item?.id} data={item} />;
        })}
      </Slider>
    </div>
  );
};

export default MovieList;
