import React from "react";
import "./styles/BeritaPage.css";
import Header from "./Components/Header";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi et pellentesque sed egestas lacus interdum rhoncus. Duis in dui rutrum nibh malesuada id ut augue egestas massa.",
    link: "#",
    image:
      "https://landingspage.net/wp-content/uploads/2023/01/web-programming-768x432.jpeg",
  },

  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi et pellentesque sed egestas lacus interdum rhoncus. Duis in dui rutrum nibh malesuada id ut augue egestas massa.",
    link: "#",
    image:
      "https://landingspage.net/wp-content/uploads/2023/01/web-programming-768x432.jpeg",
  },

  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi et pellentesque sed egestas lacus interdum rhoncus. Duis in dui rutrum nibh malesuada id ut augue egestas massa.",
    link: "#",
    image:
      "https://landingspage.net/wp-content/uploads/2023/01/web-programming-768x432.jpeg",
  },

  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi et pellentesque sed egestas lacus interdum rhoncus. Duis in dui rutrum nibh malesuada id ut augue egestas massa.",
    link: "#",
    image:
      "https://landingspage.net/wp-content/uploads/2023/01/web-programming-768x432.jpeg",
  },

  {
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae feugiat morbi et pellentesque sed egestas lacus interdum rhoncus. Duis in dui rutrum nibh malesuada id ut augue egestas massa.",
    link: "#",
    image:
      "https://landingspage.net/wp-content/uploads/2023/01/web-programming-768x432.jpeg",
  },
];

const Card = ({ title, description, link, image }) => (
  <div className="card">
    <img src={image} alt="Content" className="image" />
    <h3 className="cardTitle">{title}</h3>
    <p>{description}</p>
    <Link to="/berita/berita-konten" className="link">
      Baca Selengkapnya...
    </Link>
  </div>
);

const BeritaPage = () => (
  <div className="container">
    <header>
      <Header />
    </header>
    <main className="main">
      <div className="largeCard">
        <Card {...cardData[0]} />
        <div className="pagination">
          <button className="paginationButton">⇦ Sebelumnya</button>
          <button className="paginationButton">Selanjutnya ⇨</button>
        </div>
      </div>
      <div className="smallCards">
        {cardData.slice(1).map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </main>
  </div>
);

export default BeritaPage;
