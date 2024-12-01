import logoTest from "../assets/logoWebsite.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="Logo">
          <Link to="/" className="Logo">
            <div className="Judul">
              <p id="subtitle">Pemerintah Kota</p>
              <p id="title">Balikpapan</p>
            </div>
            <img src={logoTest} alt="Logo Website" id="Logo" />
          </Link>
        </div>
        <div className="NavBar">
          <Link to="/pelayanan" className="Nav">
            Pelayanan
          </Link>
          <Link to="/berita" className="Nav">
            Berita
          </Link>
          <Link to="/regulasi" className="Nav">
            Regulasi
          </Link>
          <Link to="/data-statistik" className="Nav">
            Data Statistik
          </Link>
          <Link to="/#FAQ-container" className="Nav">
            FAQ
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
