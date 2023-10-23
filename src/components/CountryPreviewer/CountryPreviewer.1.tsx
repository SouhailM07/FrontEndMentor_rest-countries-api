import { useDispatch, useSelector } from "react-redux";
import { reset } from "./countryPreviewerSlicer";
import { useNavigate } from "react-router-dom";

export default function CountryPreviewer() {
  let navigator = useNavigate();
  let selectedCountry = useSelector((state: any) => state.country.country);
  let dispatch = useDispatch();
  return (
    <article className="w-[90vw] m-auto h-[35vw] flex flex-col justify-between">
      <div></div>
      <button
        onClick={() => {
          dispatch(reset());
          navigator("/");
        }}
        className="h-[3vw] bg-Dark_Blue_DM_Elements text-white w-[9vw] text-[1.5vw] rounded-[0.5vw] "
      >
        Back
      </button>
      <div className="flex justify-between border-2 items-center">
        <img
          src={selectedCountry.flag}
          alt="flag"
          className="h-[25vw] w-[42vw]"
        />
        <div className="w-[39vw] border-green-500 border-2 h-[20vw]">
          <h2>{selectedCountry.name}</h2>
          <div className="details"></div>
          <div className="flex flex-wrap">
            Border Countries:
            {selectedCountry.borders?.map((e, i) => {
              return (
                <div className="bg-Dark_Blue_DM_Elements h-[2vw] w-[5vw] mx-[1vw] grid place-items-center text-Dark_Gray_LM_Input rounded-md">
                  {e}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
