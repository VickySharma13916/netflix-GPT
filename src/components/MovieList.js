import React from "react";

const MovieList = ({ title, movieData }) => {
  console.log(movieData);
  return (
    <div>
      <h1>{title}</h1>
      {movieData.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item?.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
