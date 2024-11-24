import React from "react";
import Header from "./Components/Header";
import RegulasiBox from "./Components/RegulasiBox";

function Regulasi() {
  const daftarSurat = [
    "Surat Dirjen Dukcapil Nomor 470_18754_Dukcapil tentang Pemanfaatan Data Kependudukan tanggal 10 Oktober 2018",
    "SE Mendagri 471.13/539/Dukcapil tentang Gerakan Nasional Jemput Bola Serentak KTP-el di Rutan/Lapas tanggal 10 Januari 2019",
    "Surat Dirjen Dukcapil Nomor 473.13/6153/Dukcapil tentang Pelayanan Rekam Cetak KTP-el Tanggal 26 Agustus 2019",
    "SE Mendagri 471.13/24150/DUKCAPIL tentang Pelayanan Jemput Bola Perekaman KTP-el Serentak Secara Nasional tanggal 17 Desember 2018",
    "SE Mendagri 470.13/11176/SJ tentang Penatausahaan KTP-el Rusak atau Invalid tanggal 13 Desember 2018",
    "SE Mendagri 270/10.405/Dukcapil tentang Dukungan Penyelenggaraan Pemilihan Kepala Daerah Serentak tahun 2018 tanggal 21 Juni 2018",
    "SE Mendagri 270/10.405/Dukcapil tentang Dukungan Penyelenggaraan Pemilihan Kepala Daerah Serentak tahun 2018 tanggal 21 Juni 2018",
    "Keputusan Menteri Dalam Negeri Republik Indonesia Nomor: 100-1077 Dukcapil Tahun 2017 Tentang Petunjuk Teknis Penilaian Kinerja Pejabat Pada Unit Kerja Yang Menangani Urusan Administrasi Kependudukan Di Provinsi Dan Kabupaten/Kota",
    "Keputusan Menteri Dalam Negeri Republik Indonesia Nomor 471.13-112 Dukcapil tentang Penetapan Kabupaten/Kota Sebagai Pelaksana Penerbitan Kartu Identitas Anak Tahun 2017",
    "Undang-Undang Republik Indonesia Nomor 23 Tahun 2006 Tentang Administrasi Kependudukan",
  ];

  return (
    <>
      <Header />
      <main className="p-6 mt-20">
        <div className="max-w-8xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-xl font-semibold mb-4">Daftar Regulasi</h1>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr class="bg-gray-100">
                <th class="text-left p-3 border border-gray-200">Nama Surat</th>
              </tr>
            </thead>
            <tbody>
              {daftarSurat.map((Judul, idx) => (
                <RegulasiBox key={idx} JudulSurat={Judul} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Regulasi;
