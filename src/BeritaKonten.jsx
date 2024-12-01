import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Components/Header";
import berita from "./data/berita.json";
import Footer from "./Components/Footer";

const BeritaKonten = () => {
  const { id } = useParams();
  const beritaUtama = berita.find((item) => item.id === parseInt(id));

  // Jika berita tidak ditemukan
  if (!beritaUtama) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Header />
        <h1 className="text-2xl font-bold">Berita tidak ditemukan</h1>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-4 block text-lg"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row w-full items-start justify-start gap-10 p-2 mt-24">
        {/* Bagian Utama */}
        <div className="flex-grow lg:w-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <img
            src={beritaUtama.image}
            alt={`Gambar ${beritaUtama.judul}`}
            className="w-full h-[500px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{beritaUtama.judul}</h2>
            <p className="text-gray-700 text-justify ">{beritaUtama.konten}</p>
            <img
              src={beritaUtama.fotoAdmin}
              alt={beritaUtama.admin}
              className="w-12 h-12 rounded-full object-cover mt-4 mr-4"
            />
            <p className="text-gray-600">
              Ditulis dengan penuh cinta oleh{" "}
              <strong>{beritaUtama.admin}</strong>
            </p>
          </div>
        </div>

        {/* Bagian Samping */}
        <div className="w-full lg:w-1/3 space-y-10">
          {/* Berita Terkait */}
          {berita
            .filter((item) => item.id !== parseInt(id))
            .slice(0, 6)
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row bg-gray-100 mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[100%] rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={item.image}
                  alt={`Gambar Terkait ${item.id}`}
                  className="sm:w-1/3 object-cover"
                />

                <div className="p-4 w-screen sm:w-2/3">
                  <h3 className="font-bold text-lg sm:text-2xl">
                    {item.judul}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {item.konten.substring(0, 50)}...
                  </p>
                  <Link
                    to={`/berita/${item.id}`}
                    className="text-blue-500 hover:underline mt-2 block"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeritaKonten;
