import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Pelayanan from "./Pelayanan.jsx";
import Header from "./Components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Pelayanan />
  </StrictMode>
);
