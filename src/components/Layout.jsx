import BorderColorIcon from "@mui/icons-material/BorderColor";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = theme === "light" ? DarkModeIcon : LightModeIcon;

  return (
    <div className="container">
      <h1 className="h1 ta-center mb-6">
        <BorderColorIcon fontSize="large" className="mr-3" />
        amend
        <ThemeIcon
          fontSize="large"
          className="toggle-theme"
          onClick={toggleTheme}
        />
      </h1>
      <Outlet />
    </div>
  );
};

export { Layout };
