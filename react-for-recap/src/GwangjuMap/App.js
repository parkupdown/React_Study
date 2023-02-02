import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import District from "./routes/District";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:district" element={<District />} />
      </Routes>
    </Router>
  );
};

export default App;
