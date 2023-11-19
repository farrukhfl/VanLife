import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css'
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="Site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
