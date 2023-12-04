import { useNavigate } from "react-router-dom";
import "./country.css";
// !redux
import { useDispatch } from "react-redux";
import { addCountry } from "../CountryPreviewer/countryPreviewerSlicer";
import { resetCountry } from "../SearchBar/searchBarSlicer";

export default function Country({ country }) {
  let dispatch = useDispatch();
  //
  let arrOfDetails = [country.population, country.region, country.capital];
  let arrOfDetailsLabels: string[] = ["population", "region", "capita"];
  //
  let navigator = useNavigate();
  return (
    <div
      onClick={() => {
        dispatch(addCountry(country));
        dispatch(resetCountry());
        navigator("/country");
      }}
      className="CountryBackground"
    >
      <div className="Country">
        <img src={country.flag} alt="flag" />
        <h3 className="CountryName">{country.name}</h3>
        <div className="CountryDetails" style={{ lineHeight: "1.6rem" }}>
          {arrOfDetails.map((e, i) => {
            return (
              <p key={i}>
                {arrOfDetailsLabels[i]}:
                <span className="text-Dark_Gray_LM_Input"> {e}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
