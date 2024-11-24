import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../LandingPage";
import Pelayanan from "../Pelayanan";
import BeritaKonten from "../BeritaKonten";
import PageBerita from "../PageBerita";
import DataStatistik from "../DataStatistik";
import PelayananAktaCerai from "../PelayananAktaCerai";
import PelayananAktaLahir from "../PelayananAktaLahir";
import PelayananAktaMati from "../PelayananAktaMati";
import PelayananAktaNikah from "../PelayananAktaNikah";
import PelayananEKTP from "../PelayananEKTP";
import PelayananKK from "../PelayananKK";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pelayanan" element={<Pelayanan />} />
        <Route path="/berita/berita-konten" element={<BeritaKonten />} />
        <Route path="/berita" element={<PageBerita />} />
        <Route path="/data-statistik" element={<DataStatistik />} />
        <Route path="/formAktaCerai" element={<PelayananAktaCerai />} />
        <Route path="/formAktaLahir" element={<PelayananAktaLahir />} />
        <Route path="/formAktaMati" element={<PelayananAktaMati />} />
        <Route path="/formAktaNikah" element={<PelayananAktaNikah />} />
        <Route path="/formEKTP" element={<PelayananEKTP />} />
        <Route path="/formKK" element={<PelayananKK />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
