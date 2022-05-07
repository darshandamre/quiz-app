import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export { App };
