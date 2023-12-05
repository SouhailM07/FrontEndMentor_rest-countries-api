import "./filter_panel.css";
// !redux
import { useDispatch } from "react-redux";
import { filter_panel_tg_r, selected_region_r } from "./filter_panel_slice";

export default function Filter_panel() {
  let arrOfRegions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  let dispatch = useDispatch();
  return (
    <>
      <ul className=" pl-[2rem] font-semibold shadow-xl bg-white dark:bg-Dark_Blue_DM_Elements rounded-lg absolute w-[15rem]  translate-y-[1rem]">
        {arrOfRegions.map((e, i) => {
          return (
            <li
              onClick={() => {
                dispatch(filter_panel_tg_r());
                dispatch(selected_region_r(e));
              }}
              key={i}
              className="cursor-pointer my-[1.2rem]"
            >
              {e}
            </li>
          );
        })}
      </ul>
    </>
  );
}
