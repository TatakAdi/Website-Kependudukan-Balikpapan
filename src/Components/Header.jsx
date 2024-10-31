import { useState } from "react";
import logoTest from "../assets/logoWebsite.png";
import "../styles/Header.css";

function Header() {
  const navPelayanan = useState("Pelayanan");
  const navBerita = useState("Berita");
  const navRegulasi = useState("Regulasi");
  const navData = useState("Data Statistik");
  const navFAQ = useState("FAQ");
  return (
    <>
      <header className="header px-[3%]">
        <div className="Logo ">
          <div className="Judul">
            <p id="subtitle">Pemerintah Kota</p>
            <p id="title">Balikpapan</p>
          </div>
          <img src={logoTest} alt="Logo Website" id="Logo" />
        </div>
        <div className="NavBar">
          <a href="" className="Nav">
            {navPelayanan}
          </a>
          <a href="" className="Nav">
            {navBerita}
          </a>
          <a href="" className="Nav">
            {navRegulasi}
          </a>
          <a href="" className="Nav">
            {navData}
          </a>
          <a href="" className="Nav">
            {navFAQ}
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
