import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import fotoTest from "./assets/Coding3.jpg";
import Header from "./Components/Header";
import FormBox from "./Components/formBox";
import BoxBerita from "./Components/berita";
import FaqBox from "./Components/faqBox";
import Footer from "./Components/Footer";
import "./styles/landingPage.css";

function Mainpage() {
  const location = useLocation(); // Menangkap informasi tentang URL saat ini

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
      <main>
        <div className="Pengenalan">
          <div id="AboutUs">
            <h3>
              Dinas Kependudukan
              <span className="text-purple-400"> Kota Balikpapan</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Volutpat mattis congue
              maecenas sed egestas eget. Luctus velit ac maecenas sed justo
              orci. Aliquam et malesuada maecenas est nisl semper venenatis
              consectetur. Dolor sed dolor ultricies dolor posuere. Eros eu
              ornare tincidunt pretium. Mattis vitae condimentum nibh
              suspendisse velit. Quis aliquam eleifend quis placerat cras ut
              tristique nullam. Pulvinar sollicitudin leo libero dui sit urna id
              nisi. Molestie ac ut nunc sagittis tellus. Massa cursus nisl
              mauris amet aliquet aliquam dignissim tristique iaculis. Amet id
              sit amet elit orci quam mauris ultrices faucibus. Malesuada enim
              enim sagittis enim ut vel. In vestibulum id sed sagittis
              consectetur lectus suscipit pharetra. Sed amet dui nam vel
              ultrices morbi purus.
            </p>
            <button className="AboutUs">
              Tentang Kami <span className="Arrow"></span>
            </button>
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
            <BoxBerita
              title="Lorem ipsum dolor sit amet"
              isi="Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi at pellentesque sed egestas lacus interdum rhoncus. Duis tincidunt nibh malesuada id ut aliquet egestas massa."
            />
            <BoxBerita
              title="Lorem ipsum dolor sit amet"
              isi="Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi at pellentesque sed egestas lacus interdum rhoncus. Duis tincidunt nibh malesuada id ut aliquet egestas massa."
            />
            <BoxBerita
              title="Lorem ipsum dolor sit amet"
              isi="Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi at pellentesque sed egestas lacus interdum rhoncus. Duis tincidunt nibh malesuada id ut aliquet egestas massa."
            />
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
