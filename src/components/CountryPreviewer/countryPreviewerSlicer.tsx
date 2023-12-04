import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  country: "",
};

let countryPreviewerSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.country = "";
      state.country = action.payload;
    },
    reset: (state) => {
      state.country = "";
    },
  },
});

export const { addCountry, reset } = countryPreviewerSlice.actions;
export default countryPreviewerSlice.reducer;
