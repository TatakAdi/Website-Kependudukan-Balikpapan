import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./Components/Header.jsx";
import Pengenalan from "./Components/berita.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Pengenalan />
  </StrictMode>
);
