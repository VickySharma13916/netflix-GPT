import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {
  const { gptMovieList, gptMoviename } = useSelector(
    (store) => store.gptSearch
  );
  if (!gptMovieList) return null;
  return (
    <div>
      <h1 className="text-center mb-4 text-xl font-semibold drop-shadow-lg text-white">
        Chat GPT Movies Suggestions
      </h1>
      {gptMoviename &&
        gptMoviename?.map((name, index) => {
          return (
            <MovieList
              key={name}
              title={name}
              movieData={gptMovieList[index]}
              gpt={true}
            />
          );
        })}
    </div>
  );
};

export default GptSearchSuggestion;
