import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import "./styles/index.css";
import Header from "./Components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Pengenalan />
  </StrictMode>
);
