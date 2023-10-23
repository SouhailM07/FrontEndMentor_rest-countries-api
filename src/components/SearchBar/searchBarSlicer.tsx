import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  search: "",
};

let searchBarSlicer = createSlice({
  name: "searched countries",
  initialState,
  reducers: {
    searchCountry: (state, action) => {
      state.search = action.payload;
    },
    resetCountry: (state) => {
      state.search = "";
    },
  },
});

export const { searchCountry, resetCountry } = searchBarSlicer.actions;
export default searchBarSlicer.reducer;
