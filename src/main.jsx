import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Pelayanan from "./Pelayanan.jsx";
import Header from "./Components/Header.jsx";
import BeritaKonten from "./berita-konten.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <BeritaKonten />
  </StrictMode>
);
