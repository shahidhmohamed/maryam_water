// App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Project from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
