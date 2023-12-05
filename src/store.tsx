import { configureStore } from "@reduxjs/toolkit";
//
import countryPreviewerSlicer from "./components/CountryPreviewer/countryPreviewerSlicer";
import searchBarSlicer from "./components/SearchBar/searchBarSlicer";
import filter_panel_slice from "./components/Filter_panel/filter_panel_slice";

let store = configureStore({
  reducer: {
    country: countryPreviewerSlicer,
    search: searchBarSlicer,
    filter_panel_tg: filter_panel_slice,
  },
});

export default store;
