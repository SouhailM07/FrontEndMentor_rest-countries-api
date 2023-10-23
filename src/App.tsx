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
  let [darkMode, setDarkMode] = useState(true);
  let switchMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
    darkMode
      ? (document.documentElement.className = "dark")
      : (document.documentElement.className = "light");
  };
  //
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, switchMode }}>
        <div>
          <MyContainer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
