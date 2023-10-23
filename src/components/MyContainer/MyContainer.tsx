// style
import "./mycontainer.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import {
  Navbar,
  SearchBar,
  CountriesContainer,
  CountryPreviewer,
} from "../../components";
//
export default function MyContainer() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <CountriesContainer />
              </>
            }
          />
          <Route path="country" element={<CountryPreviewer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
