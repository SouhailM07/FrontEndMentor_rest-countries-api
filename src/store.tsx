import { configureStore } from "@reduxjs/toolkit";
//
import countryPreviewerSlicer from "./components/CountryPreviewer/countryPreviewerSlicer";
import searchBarSlicer from "./components/SearchBar/searchBarSlicer";

let store = configureStore({
  reducer: {
    country: countryPreviewerSlicer,
    search: searchBarSlicer,
  },
});

export default store;
