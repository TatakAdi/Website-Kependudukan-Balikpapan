import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Components/Header";
import berita from "./data/berita.json";

const BeritaKonten = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const beritaUtama = berita.find((item) => item.id === parseInt(id)); // Cari berita berdasarkan ID

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
    <div className="flex flex-col lg:flex-row w-full items-center justify-start gap-10 p-2 mt-16">
      <header>
        <Header />
      </header>
      {/* Bagian Utama */}
      <div className="lg:w-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img
          src={beritaUtama.image} // Path dari JSON
          alt={`Gambar ${beritaUtama.judul}`}
          className="w-full h-[500px] object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">{beritaUtama.judul}</h2>
          <p className="text-gray-700 text-justify">{beritaUtama.konten}</p>
        </div>
      </div>

      {/* Bagian Samping */}
      <div className="w-full lg:w-1/3 space-y-10">
        {/* Berita Terkait */}
        {berita
          .filter((item) => item.id !== parseInt(id))
          .slice(0, 3)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row bg-gray-100 mx-auto w-full sm:w-[600px] rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={`Gambar Terkait ${item.id}`}
                className="w-full sm:w-1/3 h-full object-cover"
              />

              <div className="p-4 w-full sm:w-2/3">
                <h3 className="font-bold text-lg sm:text-2xl">{item.judul}</h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  {item.konten.substring(0, 100)}...
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
  );
};

export default BeritaKonten;
