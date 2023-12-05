// style
import "./countriescontainer.css";
// data
import data from "../../api/data.json";
// components
import { Country } from "../../components";
// hooks
import { useState } from "react";
// !redux
import { useSelector } from "react-redux";

export default function CountriesContainer() {
  let arrOfCountries: number[] = [];
  let [countries, setCountries] = useState(8);
  let searchedCountry = useSelector((state: any) => state.search.search);
  for (let i = 0; i < countries; i++) {
    arrOfCountries.push(i);
  }
  let arrOfTest = data.filter((e) => {
    return e.name.toLowerCase().includes(searchedCountry);
  });
  let selected_region = useSelector(
    (state: any) => state.filter_panel_tg.selected_region
  );
  return (
    <>
      <article>
        {selected_region == "All" ? (
          <div id="CountriesContainer">
            {arrOfTest.slice(0, countries).map((e, i) => {
              return <Country key={i} country={e} />;
            })}
          </div>
        ) : (
          <div id="CountriesContainer">
            {arrOfTest
              .filter((e) => {
                return e.region == selected_region;
              })
              .slice(0, countries)
              .map((e, i) => {
                return <Country key={i} country={e} />;
              })}
          </div>
        )}
        {arrOfTest.length >= 8 && arrOfTest.length > countries ? (
          <button
            onClick={() => {
              setCountries((countries += 8));
            }}
            id="CountriesContainer-loadingBtn"
          >
            Load More
          </button>
        ) : (
          ""
        )}
      </article>
    </>
  );
}
