import fotoTest from "./assets/Coding 3.jpg";
import Header from "./Components/Header";
import FormBox from "./Components/formBox";
import BoxBerita from "./Components/berita";
import "./styles/landingPage.css";
import "./styles/tailwind.css";

function mainpage() {
  return (
    <>
      <Header />
      <main>
        <div className="Pengenalan">
          <div id="AboutUs">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
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
                Lorem ipsum dolor sit amet consectetur. Rutrum quam gravida
                tincidunt tincidunt.
              </p>
              <h5>Misi</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum quam gravida
                tincidunt tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="FormBox ">
          <FormBox name="KTP-EL" />
          <FormBox name="Akta Kelahiran" />
          <FormBox name="Akta Kematian" />
          <FormBox name="Kartu Keluarga" />
          <FormBox name="S.K. Pindah Luar Negeri" />
          <FormBox name="Akta Perceraian" />
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
          <button className="toPageBerita">Selengkapnya</button>
        </div>
        <div className="FAQ"></div>
      </main>
    </>
  );
}

export default mainpage;
