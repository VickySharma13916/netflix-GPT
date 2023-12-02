import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSearchSlice from "./GptSearchSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gptSearch: gptSearchSlice,
    config: configSlice,
  },
});

export default appStore;
