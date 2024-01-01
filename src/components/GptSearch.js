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
      <img
        src={LOGO}
        alt="netflix"
        className="fixed z-0 top-0 h-[100vh] object-cover w-full"
      />
      <div className="relative md:px-12 px-4 pt-8 md:pt-24 z-10">
        <div className="container mx-auto">
          <div className="font-bold pt-6 md:pt-12 text-white text-2xl drop-shadow-md text-center">
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
