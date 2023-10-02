import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white pt-[30%] px-12 w-full aspect-video bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="flex gap-4">
        <button className="border flex gap-2 items-center justify-center font-semibold py-1 px-3 hover:bg-opacity-80 bg-white rounded text-black">
          <BsFillPlayFill color="black" size={20} />
          Play
        </button>
        <button className="border-0 flex gap-2 items-center justify-center font-semibold py-1 px-3 hover:bg-opacity-80 bg-gray-700 rounded text-white">
          <AiOutlineInfoCircle color="white" size={20} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
