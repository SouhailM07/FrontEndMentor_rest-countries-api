// style
import "./countrypreviewer.css";
// react router
import { useNavigate } from "react-router-dom";
// hooks
import { useContext } from "react";
import { ThemeContext } from "../../App";

// !redux
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./countryPreviewerSlicer";

export default function CountryPreviewer() {
  let { mode }: any = useContext(ThemeContext);
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
    selectedCountry.currencies[0].code,
  ];
  return (
    <article className="w-[90vw] m-auto h-[35vw] flex flex-col justify-between">
      <div></div>
      <button
        onClick={() => {
          dispatch(reset());
          navigator("/");
        }}
        className="h-[3vw] flex items-center justify-center bg-Dark_Blue_DM_Elements text-white w-[9vw] text-[1.5vw] rounded-[0.5vw] "
      >
        <ArrowBack />
        <span className="ml-[0.5vw]" data-theme={`t--${mode}`}>
          Back
        </span>
      </button>
      <div className="flex justify-between items-center text-white capitalize font-semibold">
        <img
          src={selectedCountry.flag}
          alt="flag"
          className="h-[24vw] w-[40vw]"
        />
        <div
          className="w-[40vw] h-[22vw] grid grid-cols-2"
          style={{
            gridTemplateRows: "1fr 2fr 1fr",
          }}
        >
          <h2
            className="text-[2.2vw] font-semibold text-white flex items-center"
            style={{ gridArea: "1/1/1/3" }}
          >
            {selectedCountry.name}
          </h2>
          <div
            className="details "
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
                  {e}: {arrOfDetails_s2[i]}
                </p>
              );
            })}
            <p>
              Languages:
              {selectedCountry.languages.map((e: any, i) => {
                return i !== selectedCountry.languages.length - 1 ? (
                  <span key={i}> {e.nativeName},</span>
                ) : (
                  <span key={i}> {e.nativeName}</span>
                );
              })}
            </p>
          </div>
          <div style={{ gridArea: "3/1/3/3" }}>
            <span>Border Countries:</span>
            <div className="inline-flex w-[78%] items-start flex-wrap">
              {selectedCountry.borders?.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-Dark_Blue_DM_Elements h-[2vw] w-[5vw] mx-[1vw] grid place-items-center text-Dark_Gray_LM_Input rounded-md mb-[0.6vw]"
                  >
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </svg>
  );
};
