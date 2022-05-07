import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <h1 className="h1 ta-center mb-6">
        <BorderColorIcon fontSize="large" className="mr-3" />
        amend
        <span className="toggle-theme">
          {/* TODO: add toggle theme here */}
        </span>
      </h1>
      <Outlet />
    </div>
  );
};

export { Layout };
