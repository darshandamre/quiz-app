import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useReducer(
    theme => (theme === "dark" ? "light" : "dark"),
    localStorage.getItem("theme") ?? "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else if (theme === "dark") {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
