import { Home } from "./pages/Home";
import { Archives } from "./pages/Archives";
import { NavLink, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "500",
      textDecoration: isActive ? "underline" : "none",
      color: "#000",
    };
  };

  return (
    <div className="App">
      <nav className="navlinks">
        <NavLink style={styles} className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink style={styles} className="nav-item" to="/archives">
          Archives
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </div>
  );
}

export default App;
