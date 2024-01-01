import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";
import { LOGO } from "../utils/constant";
import language from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const config = useSelector((state) => state.config.lang);
  return (
    <div className="w-100 h-100 relative">
      <img src={LOGO} alt="netflix" className="absolute z-0 h-full w-full" />
      <div className="relative px-12 pt-24 z-10">
        <div className="container mx-auto">
          <div className="font-bold pt-12 text-white text-2xl drop-shadow-md text-center">
            {language?.[config]?.title}
          </div>
          <GptSearchBar />
        </div>
      </div>
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearch;
