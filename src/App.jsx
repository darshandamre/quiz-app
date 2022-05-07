import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export { App };
