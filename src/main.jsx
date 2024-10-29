import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./Components/App.jsx";
import Pelayanan from "./Pelayanan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pelayanan />
  </StrictMode>
);
