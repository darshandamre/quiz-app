import { Route, Routes } from "react-router-dom";
import { Home, Instructions, Layout, Question } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="question" element={<Question />} />
      </Route>
    </Routes>
  );
};

export { App };
