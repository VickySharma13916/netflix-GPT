import React from "react";
import language from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const config = useSelector((state) => state.config.lang);
  return (
    <div className="py-4">
      <form className="flex justify-center gap-4">
        <input
          type="text"
          placeholder={language?.[config]?.placeholder}
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
