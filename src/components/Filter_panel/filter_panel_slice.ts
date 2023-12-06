import { createSlice } from "@reduxjs/toolkit";

interface initialType {
  [key: string]: string | boolean;
}

let initialState: initialType = {
  filter_panel_tg: false,
  selected_region: "All",
};

let filter_panel_slice = createSlice({
  name: "toggle filter panel",
  initialState,
  reducers: {
    filter_panel_tg_r: (state) => {
      state.filter_panel_tg = !state.filter_panel_tg;
    },
    selected_region_r: (state, action) => {
      state.selected_region = action.payload;
    },
  },
});

export const { filter_panel_tg_r, selected_region_r } =
  filter_panel_slice.actions;
export default filter_panel_slice.reducer;
