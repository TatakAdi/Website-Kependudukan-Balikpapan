import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import beritaData from "./data/berita.json";
import fotoTest from "./assets/Pengenalan.jpg";
import Header from "./Components/Header";
import FormBox from "./Components/formBox";
import BoxBerita from "./Components/berita";
import FaqBox from "./Components/faqBox";
import Footer from "./Components/Footer";
import "./styles/landingPage.css";

function Mainpage() {
  const [berita, setBerita] = useState([]);
  const location = useLocation(); // Menangkap informasi tentang URL saat ini

  useEffect(() => {
    const fetchBerita = async () => {
      setBerita(beritaData);
    };

    fetchBerita();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elemen
    }
    return array;
  };

  const randomBerita = shuffleArray([...berita]).slice(0, 3);

  useEffect(() => {
    // Fungsi untuk scroll ke elemen FAQ
    const scrollToFAQ = () => {
      const faqContainer = document.getElementById("FAQ-container");
      if (faqContainer) {
        faqContainer.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Jika hash ada di URL, scroll ke FAQ
    if (location.hash === "#FAQ-container") {
      scrollToFAQ();
    }
  }, [location]);

  return (
    <>
      <Header />
      <main className="w-full">
        <div className="Pengenalan">
          <div id="AboutUs">
            <h3>
              Dinas Kependudukan
              <span className="text-purple-400"> Kota Balikpapan</span>
            </h3>
            <p>
              Disdukcapil Kota Balikpapan Adalah Lembaga Pemerintahan Dibidang
              Kependudukan Dan Pencatatan Sipil Moto Pelayanan Disdukcapil Kota
              Balikpapan :
              <ul className="pl-10 list-disc">
                <li>Sederhana</li>
                <li>Mudah</li>
                <li>Aman</li>
                <li>Ramah</li>
                <li>Transparan</li>
              </ul>
            </p>
          </div>
          <div id="VisiMisi">
            <div className="img-container">
              <img src={fotoTest} alt="" />
            </div>
            <div className="VisiMisi">
              <h5>Visi</h5>
              <p>
                Tertib Administrasi Kependudukan Menuju Penduduk Berkualitas
              </p>
              <h5>Misi</h5>
              <p>
                Mewujudkan Penyeleggaraan Pelayanan Publik Yang Prima Di Bidang
                Administrasi Kependudukan
              </p>
            </div>
          </div>
        </div>
        <div className="FormBox-container">
          <h3 className="">Formulir Pelayanan</h3>
          <div className="FormBox">
            <FormBox name="KTP-EL" to="/formEKTP" />
            <FormBox name="Akta Kelahiran" to="/formAktaLahir" />
            <FormBox name="Akta Kematian" to="/formAktaMati" />
            <FormBox name="Kartu Keluarga" to="/formKK" />
            <FormBox name="Akta Pernikahan" to="/formAktaNikah" />
            <FormBox name="Akta Perceraian" to="/formAktaCerai" />
          </div>
        </div>

        <div className="Berita">
          <h3>Berita</h3>
          <div className="Berita-container">
            {randomBerita.slice(0, 3).map((item) => (
              <BoxBerita
                key={item.id}
                id={item.id}
                title={item.judul}
                isi={item.konten.slice(0, 100) + "..."}
                img={item.image}
              />
            ))}
          </div>
          <Link to="/berita" className="toPageBerita">
            Selengkapnya
          </Link>
        </div>

        <div className="FAQ">
          <h5 id="FAQTitle">Frequently Asked Question</h5>
          <div className="FAQBox">
            <FaqBox />
          </div>
        </div>
      </main>

      {/* Footer Ditambahkan di Sini */}
      <Footer />
    </>
  );
}

export default Mainpage;
