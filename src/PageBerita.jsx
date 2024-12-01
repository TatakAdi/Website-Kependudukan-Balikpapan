import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import beritaData from "./data/berita.json";
import Footer from "./Components/Footer";
import "./styles/beritaPage.css";

const cardData = beritaData.map((item) => ({
  title: item.judul,
  description: item.konten.substring(0, 100) + "...",
  link: `/berita/${item.id}`,
  image: item.image,
  admin: item.admin,
  fotoAdmin: item.fotoAdmin,
}));

const Card = ({ title, description, link, image, admin, fotoAdmin }) => (
  <div className="card border border-gray-300 rounded-lg p-3 shadow-md bg-gray-200 text-left flex flex-col justify-between min-h-[250px] md:min-h-[200px]">
    <img
      src={image}
      alt={title}
      className="w-full rounded-lg mb-3 h-40 object-cover"
    />
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
    <div className="flex items-center mt-2">
      <img
        src={fotoAdmin}
        alt={admin}
        className="w-8 h-8 rounded-full mr-2 object-cover"
      />
      <p className="text-sm text-gray-600">Oleh {admin}</p>
    </div>
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
        <main className="flex flex-col md:flex-col lg:flex-row justify-center p-5 gap-4 ">
          {/* Kartu Besar */}
          <div className="flex flex-col justify-between w-full lg:w-3/5 p-3">
            <Card {...currentItems[0]} />
          </div>

          {/* Kartu Kecil dan Pagination */}
          <div className="flex flex-col w-full lg:w-2/5">
            {/* Kartu Kecil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-4">
              {currentItems.slice(1).map((data, index) => (
                <Card key={index} {...data} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center gap-2">
              <button
                className={`bg-gray-200 text-black py-2 px-4 rounded-lg shadow-md ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300"
                }`}
                onClick={prevPage}
              >
                ⇦ Sebelumnya
              </button>
              <button
                className={`bg-gray-200 text-black py-2 px-4 rounded-lg shadow-md ${
                  currentPage === Math.ceil(cardData.length / itemsPerPage)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300"
                }`}
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(cardData.length / itemsPerPage)
                }
              >
                Selanjutnya ⇨
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BeritaPage;
