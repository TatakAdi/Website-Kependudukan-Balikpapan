import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Pengenalan from "./Components/Pengenalan";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Pengenalan />
  </StrictMode>
);
