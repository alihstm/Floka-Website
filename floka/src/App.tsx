import { Routes, Route } from "react-router-dom";
import Main from "./Components/home/home";
import Works from "./Components/works/works";
import Team from "./Components/team/team"
import "../src/Components/global.css";

const App = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/works/:category" element={<Works />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default App;
