// style
import "./searchbar.css";
// !redux
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "./searchBarSlicer";
import { filter_panel_tg_r } from "../Filter_panel/filter_panel_slice";
// components
import { Filter_panel } from "../../components";

export default function SearchBar() {
  let dispatch = useDispatch();
  let filter_panel_tg = useSelector(
    (state: any) => state.filter_panel_tg.filter_panel_tg
  );
  let selected_region = useSelector(
    (state: any) => state.filter_panel_tg.selected_region
  );
  return (
    <div id="SearchBar">
      <div id="SearchBar-inputContainer">
        <Magnifier />
        <input
          type="text"
          placeholder="Search for a country"
          id="SearchBar-search"
          onChange={(e) => {
            dispatch(searchCountry(e.target.value));
          }}
        />
      </div>
      <div className="dark:text-white tb:h-full  h-[4rem] mt-[4rem] tb:mt-[0rem]">
        <p
          onClick={() => {
            dispatch(filter_panel_tg_r());
          }}
          id="filter_panel_select"
          className="w-[15rem] justify-between px-[2rem] rounded-lg border-lg pl-[2rem] flex items-center font-semibold text-[1.1rem]  dark:bg-Dark_Blue_DM_Elements h-full"
        >
          <span className="">{selected_region}</span>
          <ArrowLogo r={filter_panel_tg} />
        </p>
        {filter_panel_tg && <Filter_panel />}
      </div>
    </div>
  );
}

let Magnifier = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
    </svg>
  );
};

let ArrowLogo = ({ r }) => {
  return (
    <svg
      className={`${r ? "rotate-180" : ""} dark:fill-white `}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
    </svg>
  );
};
