import React, {useContext}from "react";
import { ThemeContext } from "../ThemeContext/themeContext";
import "./btn-toggle.css";

export default function Btn() {
  
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button className={theme ? "btn" : "btn dark"}
     onClick={toggleTheme} >
      {theme ? "LIGHT" : "DARK"}
    </button>
  );
}
