// style
import "./countriescontainer.css";
// data
import data from "../../api/data.json";
// components
import { Country } from "../../components";

export default function CountriesContainer() {
  let arrOfCountries = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <article className="w-[90vw] m-auto mt-[3rem] flex flex-wrap justify-between">
      {arrOfCountries.map((e, i) => {
        return (
          <Country
            key={i}
            img={data[e].flag}
            name={data[e].name}
            population={data[e].population}
            region={data[e].region}
            capital={data[e].capital}
          />
        );
      })}
    </article>
  );
}
