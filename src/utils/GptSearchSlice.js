import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearch: false,
  },
  reducers: {
    toogleGptSearchView: (state) => {
      return (state.gptSearch = !state.gptSearch);
    },
  },
});

export const { toogleGptSearchView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
