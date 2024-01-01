import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovie } from "../utils/GptSearchSlice";
import { API_OPTIONS } from "../utils/constant";
import language from "../utils/languageConstant";
import openai from "../utils/openAI";

const GptSearchBar = () => {
  const config = useSelector((state) => state.config.lang);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Search Movie List from TMDB APIs
  const SearchTmdbMovieList = async (movie) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      return result.data.results;
    } catch (error) {
      console.error("Error fetching TMDB data:", error);
    }
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a Movie recommendation system and suggest the names of 5 movies for the query: " +
      text +
      ". Provide only the names, separated by commas.";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!chatCompletion.choices) {
      return alert("GPT not Working. Try after sometime.");
    }
    const gptMovie = chatCompletion?.choices?.[0]?.message?.content.split(",");
    // For Each movie search in the Movie in the TMDB Database
    const movieData = await Promise.all(
      gptMovie.map((movie) => SearchTmdbMovieList(movie))
    );
    dispatch(addGptMovie({ moviename: gptMovie, gptMovies: movieData }));
  };

  return (
    <div className="py-4">
      <form
        className="flex justify-center gap-4"
        onSubmit={(e) => submitSearch(e)}
      >
        <input
          type="text"
          placeholder={language?.[config]?.placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-80 px-2 rounded text-slate-800 shadow-md shadow-black"
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-semibold text-lg px-4 py-2 rounded shadow-black shadow-md"
        >
          {language?.[config]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
