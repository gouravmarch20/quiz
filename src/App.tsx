import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { Navbar } from "./components";
const App = () => {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
