import "./App.css";
import Content from "./components/Content/Content";
import ThemeContextProvider from "./components/ThemeContext/themeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </>
  );
}

export default App;
