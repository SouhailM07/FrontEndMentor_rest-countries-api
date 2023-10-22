import React from "react";
//
import "./style/input.css";
import "./App.css";
// components
import { MyContainer } from "./components";
// hooks
import { useState } from "react";

//@ts-ignore
export const ThemeContext = React.createContext();

function App() {
  let body = document.body as HTMLBodyElement;
  //
  let [mode, setMode] = useState("light");
  let switchMode = () => {
    if (mode == "light") setMode("dark");
    else if (mode == "dark") setMode("light");
    console.log(mode);
  };
  //
  body.id = `body--${mode}`;
  return (
    <>
      <ThemeContext.Provider value={{ mode, switchMode }}>
        <div>
          <MyContainer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
