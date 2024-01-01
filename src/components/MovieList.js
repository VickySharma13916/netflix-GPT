import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MovieCard from "./MovieCard";

const MovieList = ({ gpt, title, movieData, backgroundColor }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`${
        gpt
          ? "container mx-4 md:mx-auto pb-8"
          : "md:px-12 p-4 md:py-8"
      } bg-[#0e0e0e] md:bg-transparent`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`text-lg md:text-xl text-white font-semibold pb-4 ${
          gpt && "relative"
        }`}
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
