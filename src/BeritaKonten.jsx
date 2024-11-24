import React from "react";
import Coding from "./assets/coding.svg";
import meme from "./assets/meme.svg";
import Header from "./Components/Header";

const BeritaKonten = () => {
  return (
    <div className="flex flex-col ml-8 lg:flex-row gap-8 p-2 mt-20">
      <header>
        <Header />
      </header>
      {/* Bagian Utama */}
      <div className="lg:w-[600px] h-[1400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img
          src={Coding}
          alt="Gambar Utama"
          className="w-full h-[500px] object-cover"
        />
        <div className="p-6">
          <h2 className="p-10 text-xl font-bold mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-gray-700 text-justify p-10">
            Lorem ipsum dolor sit amet consectetur. Non nisi non mattis
            habitasse. Quis sit quis risus posuere purus aenean. Aliquam
            adipiscing enim consequat proin. Aliquet interdum elit nullam orci
            mollis sit velit. Vitae et duis enim bibendum tellus duis in nunc.
            Vestibulum purus ultricies quis euismod amet molestie fames. Lectus
            tempus sit vel scelerisque vulputate accumsan placerat. Dictum
            mauris consectetur arcu est. Consequat sem volutpat felis tincidunt
            ultricies. Aliquam magna sed suspendisse risus tortor. Iaculis
            ultrices vitae lacus sed curabitur cursus ullamcorper. Risus a risus
            enim quam viverra. Ullamcorper turpis tellus leo viverra id
            porttitor sollicitudin massa eu. Sed velit libero pellentesque
            posuere cursus malesuada neque risus elit. Vel felis nibh semper eu.
            Vivamus feugiat semper et dignissim placerat pulvinar odio mauris.
            Faucibus parturient et tincidunt amet diam vitae habitant. Egestas
            sit ut dignissim fames cursus nunc senectus laoreet aliquam.
            Malesuada ullamcorper id tristique vitae sagittis natoque nam quam
            scelerisque. Lorem at nisl diam vel rhoncus vulputate nunc etiam. Ac
            ultricies nisi facilisi rhoncus. Egestas tempus tellus morbi ornare.
            Sed sed mattis ultricies consectetur quis tincidunt pharetra. A
            faucibus eu morbi aliquam nibh nisl. Vel magna velit urna lorem
            nulla rhoncus tellus fames sagittis. Venenatis nullam purus et enim
            donec. Amet pellentesque sed condimentum volutpat adipiscing. Id
            facilisi sit a morbi in. Sapien bibendum posuere iaculis tellus
            feugiat aliquam viverra.
          </p>
        </div>
      </div>

      {/* Bagian Samping */}
      <div className="w-full lg:w-1/3 mt-28 space-y-6">
        {/* Konten Gambar Samping */}
        <div className="flex mb-16 bg-gray-100 mx-auto w-full lg:ml-20 lg:w-[524px] h-auto lg:h-[500px] rounded-lg overflow-hidden shadow-md">
          <img
            src={meme}
            alt="Gambar Samping"
            className="w-full h-auto lg:w-[600px] lg:h-full object-cover"
          />
        </div>

        {/* Konten Terkait */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex flex-col sm:flex-row bg-gray-100 mx-auto w-full sm:w-[600px] h-auto rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={Coding}
              alt={`Gambar Terkait ${item}`}
              className="w-full sm:w-1/3 h-full object-cover"
            />
            <div className="p-4 w-full sm:w-2/3">
              <h3 className="font-bold text-lg sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaKonten;
