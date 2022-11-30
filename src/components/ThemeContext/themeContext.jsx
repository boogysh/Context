import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  theme && document.body.classList.add("dark-body");
  !theme && document.body.classList.remove("dark-body");

  return (
    <>
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}
