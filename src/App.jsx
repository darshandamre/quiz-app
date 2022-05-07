import { Route, Routes } from "react-router-dom";
import { Home, Instructions, Layout } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="instructions" element={<Instructions />} />
      </Route>
    </Routes>
  );
};

export { App };
