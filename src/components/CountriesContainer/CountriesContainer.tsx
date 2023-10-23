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
  let arrOfTest = data.filter((e, i) => {
    // return searchedCountry.split("").every((l) => e.name.includes(l));
    return e.name.toLowerCase().includes(searchedCountry);
  });
  console.log(arrOfTest);
  return (
    <>
      <article>
        <div className="w-[90vw] m-auto flex flex-wrap justify-between">
          {arrOfTest.slice(0, countries).map((e, i) => {
            return <Country key={i} country={e} />;
          })}
        </div>
        {arrOfTest.length >= 8 && countries! >= arrOfTest.length ? (
          <button
            onClick={() => {
              setCountries((countries += 8));
            }}
            className="outline-none my-[2vw] font-semibold w-[18vw] h-[5vw] text-[2vw] bg-Dark_Blue_DM_Elements text-white rounded-xl block m-auto "
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
