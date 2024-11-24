import React from "react";
import Header from "./Components/Header";
import RegulasiBox from "./Components/RegulasiBox";

function Regulasi() {
  const daftarSurat = [
    {
      title:
        "Surat Dirjen Dukcapil Nomor 470_18754_Dukcapil tentang Pemanfaatan Data Kependudukan tanggal 10 Oktober 2018",
      link: "https://drive.google.com/file/d/1SMAa9BoCZ0tzX0xEyPIngwBZ9qsjoocw/view?usp=drive_link",
    },
    {
      title:
        "SE Mendagri 471.13/539/Dukcapil tentang Gerakan Nasional Jemput Bola Serentak KTP-el di Rutan/Lapas tanggal 10 Januari 2019",
      link: "https://drive.google.com/file/d/1PCwXT7nx87Annzg4N7zBI1CVSLVwAQiX/view?usp=drive_link",
    },
    {
      title:
        "Surat Dirjen Dukcapil Nomor 473.13/6153/Dukcapil tentang Pelayanan Rekam Cetak KTP-el Tanggal 26 Agustus 2019",
      link: "https://drive.google.com/file/d/1aLuHE1fYwSnwoxqIE7TNPYmq-UZnVkbk/view?usp=drive_link",
    },
    {
      title:
        "SE Mendagri 471.13/24150/DUKCAPIL tentang Pelayanan Jemput Bola Perekaman KTP-el Serentak Secara Nasional tanggal 17 Desember 2018",
      link: "https://drive.google.com/file/d/14nDDIJA7-l6iCNO2mbjdJMbkUS6FZSgl/view?usp=drive_link",
    },
    {
      title:
        "SE Mendagri 470.13/11176/SJ tentang Penatausahaan KTP-el Rusak atau Invalid tanggal 13 Desember 2018",
      link: "https://drive.google.com/file/d/1MqLFq4j3vkt0AnzsrX0_-YouwlyJZ8HA/view?usp=drive_link",
    },
    {
      title:
        "SE Mendagri 270/10.405/Dukcapil tentang Dukungan Penyelenggaraan Pemilihan Kepala Daerah Serentak tahun 2018 tanggal 21 Juni 2018",
      link: "https://drive.google.com/file/d/1I5DtwW6qMyCErJM9f9ElShU5d_MCj7ov/view?usp=drive_link",
    },
    {
      title:
        "SE Mendagri 270/10.405/Dukcapil tentang Dukungan Penyelenggaraan Pemilihan Kepala Daerah Serentak tahun 2018 tanggal 21 Juni 2018",
      link: "https://drive.google.com/file/d/158Nn18o3YNhtFywC8yVEfJ1Ffrqrod7R/view?usp=drive_link",
    },
    {
      title:
        "Keputusan Menteri Dalam Negeri Republik Indonesia Nomor: 100-1077 Dukcapil Tahun 2017 Tentang Petunjuk Teknis Penilaian Kinerja Pejabat Pada Unit Kerja Yang Menangani Urusan Administrasi Kependudukan Di Provinsi Dan Kabupaten/Kota",
      link: "https://drive.google.com/file/d/1sDmF2Q7hZFtd3oBZTCIfs44cV2Z7cWhZ/view?usp=drive_link",
    },
    {
      title:
        "Keputusan Menteri Dalam Negeri Republik Indonesia Nomor 471.13-112 Dukcapil tentang Penetapan Kabupaten/Kota Sebagai Pelaksana Penerbitan Kartu Identitas Anak Tahun 2017",
      link: "https://drive.google.com/file/d/1vlvp0KbWSKfSR9A50RtsuzGb7Ns2OFQi/view?usp=drive_link",
    },
    {
      title:
        "Undang-Undang Republik Indonesia Nomor 23 Tahun 2006 Tentang Administrasi Kependudukan",
      link: "https://drive.google.com/file/d/1SVjD2LG2n4srgQFVtwC2LmClMHCYYMpD/view?usp=drive_link",
    },
  ];

  return (
    <>
      <Header />
      <main className="p-6 mt-20">
        <div className="max-w-8xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-xl font-semibold mb-4">Daftar Regulasi</h1>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border border-gray-200">
                  Nama Surat
                </th>
              </tr>
            </thead>
            <tbody>
              {daftarSurat.map((Judul, idx) => (
                <RegulasiBox
                  key={idx}
                  JudulSurat={Judul.title}
                  link={Judul.link}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Regulasi;
