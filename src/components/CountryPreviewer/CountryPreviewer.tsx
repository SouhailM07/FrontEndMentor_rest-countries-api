// style
import "./countrypreviewer.css";
// react router
import { useNavigate } from "react-router-dom";

// !redux
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./countryPreviewerSlicer";

export default function CountryPreviewer() {
  //
  let navigator = useNavigate();
  let dispatch = useDispatch();
  let selectedCountry = useSelector((state: any) => state.country.country);
  // arrays
  let arrOfDetailsLabels_s1 = [
    "native name",
    "population",
    "region",
    "sub region",
    "capital",
  ];
  let arrOfDetails_s1 = [
    selectedCountry.nativeName,
    selectedCountry.population,
    selectedCountry.region,
    selectedCountry.subregion,
    selectedCountry.capital,
  ];

  let arrOfDetailsLabels_s2 = ["top level domain", "currencies"];

  let arrOfDetails_s2 = [
    selectedCountry.topLevelDomain,
    selectedCountry.currencies[0].code.length > 0
      ? selectedCountry.currencies[0].code
      : "",
  ];
  return (
    <article className="CountryPreviewer">
      <div></div>
      <button
        onClick={() => {
          dispatch(reset());
          navigator("/");
        }}
        className="CountryPreviewer-backBtn"
      >
        <ArrowBack />
        <span>Back</span>
      </button>
      <div className="CountryPreviewer-dataContainer">
        <img src={selectedCountry.flag} alt="flag" />
        <div className="CountryPreviewer-dataContainer-details">
          <h2 className="CountryPreviewer-dataContainer-details-title">
            {selectedCountry.name}
          </h2>
          <div
            className="details"
            style={{ gridArea: "2/1/3/1", wordSpacing: "0.2vw" }}
          >
            {arrOfDetailsLabels_s1.map((e, i) => {
              return (
                <p key={i}>
                  {e}:{" "}
                  <span className="text-Very_Dark_Blue_LM_text">
                    {arrOfDetails_s1[i]}
                  </span>
                </p>
              );
            })}
          </div>
          <div>
            {arrOfDetailsLabels_s2.map((e, i) => {
              return (
                <p key={i}>
                  {e}:
                  <span className="text-Very_Dark_Blue_LM_text">
                    {arrOfDetails_s2[i]}
                  </span>
                </p>
              );
            })}
            <p>
              Languages:
              {selectedCountry.languages.map((e: any, i) => {
                return i !== selectedCountry.languages.length - 1 ? (
                  <span key={i} className="text-Very_Dark_Blue_LM_text">
                    {" "}
                    {e.nativeName},
                  </span>
                ) : (
                  <span key={i} className="text-Very_Dark_Blue_LM_text">
                    {" "}
                    {e.nativeName}
                  </span>
                );
              })}
            </p>
          </div>
          <div style={{ gridArea: "3/1/3/3" }}>
            <span>Border Countries:</span>
            <div className="borderContainer">
              {selectedCountry.borders?.map((e, i) => {
                return (
                  <div key={i} className="borderCountry">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

let ArrowBack = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </svg>
  );
};
