import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import "./App.css";

const App = () => {
  const [hoverCatalogo, setHoverCatalogo] = useState(false);
  const [hoverNovo, setHoverNovo] = useState(false);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            style={{
              borderRadius: "8px",
              padding: "10px",
              fontSize: "16px",
            }}
            onMouseEnter={() => setHoverCatalogo(true)}
            onMouseLeave={() => setHoverCatalogo(false)}
          >
            <Link
              to="/"
              className={`nav-link ${
                hoverCatalogo ? "text-dark" : "text-white"
              }`}
            >
              Catálogo
            </Link>
          </li>
          <li
            className="nav-item"
            style={{
              borderRadius: "8px",
              marginLeft: "20px",
              padding: "10px",
              fontSize: "16px",
            }}
            onMouseEnter={() => setHoverNovo(true)}
            onMouseLeave={() => setHoverNovo(false)}
          >
            <Link
              to="/dados"
              className={`nav-link ${hoverNovo ? "text-dark" : "text-white"}`}
            >
              Novo
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
