import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import Pelayanan from "../Pelayanan";
import BeritaKonten from "../BeritaKonten";
import PageBerita from "../PageBerita";
import DataStatistik from "../DataStatistik";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelayanan" element={<Pelayanan />} />
        <Route path="/berita/:id" element={<BeritaKonten />} />
        <Route path="/berita" element={<PageBerita />} />
        <Route path="/data-statistik" element={<DataStatistik />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
