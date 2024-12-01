import "../styles/berita.css";
import { Link } from "react-router-dom";

function berita({ id, title, isi, img }) {
  return (
    <div className="kotakBerita">
      <div className="img-container-berita">
        <img src={img} alt={title} />
      </div>
      <div className="IsiBerita">
        <h4>{title}</h4>
        <p>{isi}</p>
        <h6>
          <Link to={`/berita/${id}`}>Baca Selengkapnya</Link>
        </h6>
      </div>
    </div>
  );
}

export default berita;
