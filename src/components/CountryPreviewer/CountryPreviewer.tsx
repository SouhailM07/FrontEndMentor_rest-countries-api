// style
import "./countrypreviewer.css";
// react router
import { useNavigate } from "react-router-dom";
// api
import data from "../../api/data.json";
// !redux
import { useDispatch, useSelector } from "react-redux";
import { reset, addCountry } from "./countryPreviewerSlicer";

export default function CountryPreviewer() {
  //
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
      <BackBtn />
      <div className="CountryPreviewer-dataContainer">
        <img src={selectedCountry.flag} alt="flag" />
        <div className="CountryPreviewer-dataContainer-details">
          <div>
            <Country_name s_country={selectedCountry} />
            <div className="grid grid-cols-2">
              <Details_s1
                arr_labels={arrOfDetailsLabels_s1}
                arr_details={arrOfDetails_s1}
              />
              <Details_s2
                arr_labels={arrOfDetailsLabels_s2}
                arr_details={arrOfDetails_s2}
                s_country={selectedCountry}
              />
            </div>
          </div>
          <Border_countries s_country={selectedCountry} />
        </div>
      </div>
    </article>
  );
}

let BackBtn = () => {
  let navigator = useNavigate();
  let dispatch = useDispatch();
  return (
    <>
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
    </>
  );
};

let Details_s1 = ({ arr_details, arr_labels }) => {
  return (
    <>
      <div className="details" style={{ wordSpacing: "0.2rem" }}>
        {arr_labels.map((e, i) => {
          return (
            <p key={i}>
              {e}:{" "}
              <span className="text-Very_Dark_Blue_LM_text">
                {arr_details[i]}
              </span>
            </p>
          );
        })}
      </div>
    </>
  );
};

let Details_s2 = ({ arr_details, arr_labels, s_country }) => {
  return (
    <>
      <div>
        {arr_labels.map((e, i) => {
          return (
            <p key={i}>
              {e}:
              <span className="text-Very_Dark_Blue_LM_text">
                {arr_details[i]}
              </span>
            </p>
          );
        })}
        <p>
          Languages:
          {s_country.languages.map((e: any, i) => {
            return i !== s_country.languages.length - 1 ? (
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
    </>
  );
};

let Country_name = ({ s_country }) => {
  return (
    <h2 className="CountryPreviewer-dataContainer-details-title ">
      {s_country.name}
    </h2>
  );
};

let ArrowBack = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </svg>
  );
};

let Border_countries = ({ s_country }) => {
  let dispatch = useDispatch();
  return (
    <>
      <div
        className="lg:flex mt-4 lg:space-x-[0.7rem]"
        style={{ gridArea: "3/1/3/3" }}
      >
        <span>Border Countries:</span>
        <div className="borderContainer">
          {s_country.borders?.map((e, i) => {
            return (
              <div
                onClick={() => {
                  let selectedBorderCountry = data.find((country) => {
                    return country.alpha3Code == e;
                  });
                  dispatch(addCountry(selectedBorderCountry));
                }}
                key={i}
                className="borderCountry"
              >
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
