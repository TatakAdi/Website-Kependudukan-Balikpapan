import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import beritaData from "./data/berita.json"; // Ganti dengan path JSON Anda

// Transform data JSON agar sesuai dengan struktur Card
const cardData = beritaData.map((item) => ({
  title: item.judul,
  description: item.konten.substring(0, 100) + "...", // Potong deskripsi
  link: `/berita/${item.id}`,
  image: item.image,
}));

const Card = ({ title, description, link, image }) => (
  <div className="card border border-gray-300 rounded-lg p-3 shadow-md bg-gray-200 text-left flex flex-col justify-between min-h-[200px]">
    <img src={image} alt={title} className="w-full rounded-lg mb-3" />
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p>{description}</p>
    <Link
      to={link}
      className="text-green-700 font-semibold text-lg mt-auto hover:underline"
    >
      Baca Selengkapnya...
    </Link>
  </div>
);

const BeritaPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(cardData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-20 text-center text-gray-800">
        <main className="flex justify-center p-5 gap-1">
          {/* Kartu Besar */}
          <div className="flex flex-col justify-between w-full sm:w-3/5 p-3">
            <Card {...currentItems[0]} />

            {/* Pagination */}
            <div className="mt-auto flex justify-center gap-2">
              <button
                className="bg-gray-200 text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-300"
                onClick={prevPage}
              >
                ⇦ Sebelumnya
              </button>
              <button
                className="bg-gray-200 text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-300"
                onClick={nextPage}
              >
                Selanjutnya ⇨
              </button>
            </div>
          </div>

          {/* Kartu Kecil */}
          <div className="grid grid-cols-2 mt-3 gap-4 w-full sm:w-3/5 md:w-2/3 lg:w-1/2">
            {currentItems.slice(1).map((data, index) => (
              <Card key={index} {...data} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default BeritaPage;
