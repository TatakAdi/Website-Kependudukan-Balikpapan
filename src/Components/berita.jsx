import fotoTest from "../assets/Coding 3.jpg";
import "../styles/berita.css";

function berita(props) {
  return (
    <div className="kotakBerita">
      <div className="img-container-berita">
        <img src={fotoTest} alt="" />
      </div>
      <div className="IsiBerita">
        <h4>{props.title}</h4>
        <p>{props.isi}</p>
        <h6>Baca Selengkapnya</h6>
      </div>
    </div>
  );
}

export default berita;
