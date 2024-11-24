import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./LandingPage.jsx";
import FormUniversal from "./FormUniversal.jsx";
import BeritaKonten from "./berita-konten.jsx";
import DataStatistik from "./DataStatistik.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
