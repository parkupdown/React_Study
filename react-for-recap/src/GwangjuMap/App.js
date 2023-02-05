import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import District from "./routes/District";
import Home from "./routes/Home";
import Spot from "./routes/Spot";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:district" element={<District />} />
        <Route path="/:district/:spot" element={<Spot />} />
      </Routes>
    </Router>
  );
};

export default App;
