import fotoTest from "../assets/Coding 3.jpg";
import "../styles/berita.css";
import { Link } from "react-router-dom";

function berita(props) {
  return (
    <div className="kotakBerita">
      <div className="img-container-berita">
        <img src={fotoTest} alt="" />
      </div>
      <div className="IsiBerita">
        <h4>{props.title}</h4>
        <p>{props.isi}</p>
        <h6>
          <Link to="/berita/berita-konten">Baca Selengkapnya</Link>
        </h6>
      </div>
    </div>
  );
}

export default berita;
