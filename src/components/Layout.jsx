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
      <h3 className="h3 mb-6">
        <BorderColorIcon className="mr-3" />
        amend
        <ThemeIcon
          fontSize="large"
          className="toggle-theme"
          onClick={toggleTheme}
        />
      </h3>
      <Outlet />
    </div>
  );
};

export { Layout };
