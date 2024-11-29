import React, { useState } from "react";
import Header from "./Components/Header";

const Pelayanan = () => {
  const services = [
    {
      title: "KTP Elektronik",
      subtitles: [
        {
          subtitle: "Pembuatan KTP Elektronik Baru",
          requirements: [
            "Fotokopi Kartu Keluarga",
            "Fotokopi Akta Kelahiran",
            "Surat pengantar dari RT/RW Tempat Tinggal",
          ],
          procedures: [
            "Akses web Disdukcapil Balikpapan untuk antrean online.",
            'Pilih layanan "KTP Elektronik Baru".',
            "Isi formulir pendaftaran dan dapatkan nomor antrean.",
            "Datang ke kantor Disdukcapil untuk verifikasi dan foto.",
            "Pemohon mengambil KTP yang sudah dicetak.",
          ],
        },
        {
          subtitle: "Pergantian KTP Elektronik Karena Hilang/Rusak",
          requirements: [
            "Fotokopi Kartu Keluarga",
            "KTP lama",
            "Surat keterangan hilang dari pihak kepolisian",
          ],
          procedures: [
            "Akses web Disdukcapil Balikpapan untuk antrean online.",
            'Pilih layanan "Pergantian KTP Elektronik".',
            "Isi formulir pendaftaran dan dapatkan nomor antrean.",
            "Datang ke kantor Disdukcapil untuk verifikasi dan menyerahkan KTP lama.",
            "Pemohon mengambil KTP yang sudah dicetak.",
          ],
        },
        {
          subtitle: "Pergantian KTP Elektronik karena perubahan data",
          requirements: [
            "Fotokopi kartu keluarga terbaru",
            "Fotokopo EKTP Lama",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "KTP-EL" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pergantian KTP Elektronik karena perubahan data" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda",
          ],
        },
        {
          subtitle: "Kartu Identitan Anak",
          requirements: [
            "Kartu Keluarga",
            "Akta Kelahiran Anak",
            "Pas Foto 3 x 4 selembar. Latar belakang gambar sesuaikan dengan tahun lahir anak (merah: ganjil, biru: genap) ",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "KTP-EL" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Kartu Identitas Anak" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda",
          ],
        },
      ],
    },
    {
      title: "Akta Kelahiran",
      subtitles: [
        {
          subtitle: "Pembuatan Akta Kelahiran Baru WNI",
          requirements: [
            "Fotokopi Kartu Keluarga",
            "Fotokopi Surat Kelahiran dari rumah sakit",
            "Fotokopi buku nikah/Akta Pernikahan",
            "Fotokopi KTP dua orang saksi",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Kelahiran" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pembuatan Akta Kelahiran Baru WNI" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda",
          ],
        },
        {
          subtitle: "Akta Kelahiran Hilang/Rusak",
          requirements: [
            "Surat Keterangan Kehilangan dari kepolisian",
            "Foto Akta Kelahiran asli jika rusak",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Kelahiran" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Akta Kelahiran Hilang/Rusak" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda",
          ],
        },
        {
          subtitle: "Akta Kelahiran WNA",
          requirements: [
            "Surat Keterangan Kelahiran dari Rumah Sakit",
            "Dokumen Perjalanan",
            "Fotokopi Paspor",
            "Fotokopi Akta Pernikahan Negara Asal",
            "Fotokopi KTP Negara Asal",
            "Fotokopi Visa",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Kelahiran" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pembuatan Akta Kelahiran WNA" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda",
          ],
        },
      ],
    },
    {
      title: "Akta Kematian",
      subtitles: [
        {
          subtitle: "Akta Kematian Baru",
          requirements: [
            "Fotokopi Akta Kelahiran",
            "Surat Keterangan Kematian",
            "Fotokopi Kartu Keluarga",
            "Fotokopi KTP",
            "Fotokopi dokumen Perjalanan/visa bagi WNA",
            "Fotokopi surat kuasa untuk non-ahli waris",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Kematian" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pembuatan Akta Kematian Baru" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Akta Kematian Hilang/Rusak",
          requirements: [
            "Surat keterangan hilang dari pihak kepolisian",
            "Foto Akta Kematian asli yang rusak",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Kematian" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Akta Kematian Hilang/Rusak" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
      ],
    },
    {
      title: "Kartu Keluarga",
      subtitles: [
        {
          subtitle: "Kartu Keluarga Baru",
          requirements: [
            "Fotokopi KK Pihak Suami",
            "Fotokopi KK Pihak Istri",
            "Foto Buku Nikah atau Fotokopi Akta Pernikahan",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Kartu Keluarga" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pembuatan Kartu Keluarga Baru" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Pemisahan Kartu Keluarga",
          requirements: [
            "Fotokopi Kartu Keluarga",
            "Fotokopi Akta perceraian jika pemisahan terjadi dikarenakan perceraian",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Kartu Keluarga" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pemisahan Kartu Keluarga" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Penambahan Anggota Kartu Keluarga karena pindah Hak Asuh",
          requirements: [
            "Fotokopi kartu keluarga asal (Jika Ada)",
            "Fotokopi kartu keluarga tujuan",
            "Fotokopi surat pernyataan pemindahan hak asuh anak",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Kartu Keluarga" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Penambahan Anggota Kartu Keluarga karena pindah Hak Asuh" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Kartu Keluarga Hilang/Rusak",
          requirements: [
            "Surat Keterangan Hilang dari kepolisian",
            "Foto KK asli yang rusak",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Kartu Keluarga" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Kartu Keluarga Hilang/Rusak" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Perubahan Data Kartu Keluarga",
          requirements: [
            "Fotokopi kartu keluarga yang lama",
            "Fotokopi dokumen pendukung, seperti akta kelahiran,ijazah,buku nikah, dsb.",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Kartu Keluarga" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Perubahan Data Kartu Keluarga" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
      ],
    },
    {
      title: "Akta Pernikahan",
      subtitles: [
        {
          subtitle: "Pernikahan WNI",
          requirements: [
            "Fotokopi Surat Keterangan terjadinya pernikahan dari dinas keagamaan",
            "Pas foto berwarna dari kedua pasangan",
            "Fotokopi Kartu Keluarga",
            "Fotokopi EKTP",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Pernikahan" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pernikahan WNI" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Pernikahan WNA",
          requirements: [
            "Fotokopi surat keterangan terjadinya pernikahan dari negara asal",
            "Fotokopi Visa atau izin jalan di Indonesia",
            "Fotokopi surat keterangan pindah luar negeri",
            "Pas foto berwarna dari kedua pasangan",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Pernikahan" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Pernikahan WNA" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Akta Pernikahan Hilang/Rusak",
          requirements: [
            "Surat kehilangan dari pihak kepolisian",
            "Foto Akta Pernikahan asli yang rusak",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Pernikahan" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Akta Pernikahan hilang/rusak" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
      ],
    },
    {
      title: "Akta Perceraian",
      subtitles: [
        {
          subtitle: "Akta Perceraian Baru",
          requirements: [
            "Fotokopi surat putusan pengadilan",
            "Fotokopi Akta Pernikahan",
            "Fotokopi Kartu Keluarga",
            "Fotokopi EKTP kedua pihak yang bercerai",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Perceraian" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Akta Perceraian Baru" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
        {
          subtitle: "Akta Perceraian Hilang/Rusak",
          requirements: [
            "Surat keterangan dari pihak kepolisian",
            "Foto Akta Perceraian Asli yang rusak",
          ],
          procedures: [
            "Akses website Disdukcapil Balikpapan untuk mengisi formulir",
            'Pilih kotak "Akta Perceraian" pada bagian formulir setelah masuk website',
            "Mengisi data diri di halaman pertama formulir setelah menekan kotak tadi",
            'Pilih "Akta Perceraian Hilang/Rusak" pada kotak "Jenis Pelayanan" di halaman kedua website.',
            "Mengupload semua file yang dibutuhkan sesuai persyaratan yang diperlukan",
            "Mengumpulkan formulir dan pesan pemberitahuan akan muncul di No. Telepon atau Email Pribadi Anda untuk langkah selanjutnya",
          ],
        },
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedSubtitle, setSelectedSubtitle] = useState(
    services[0].subtitles[0]
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <Header></Header>

      {/* Main Content Section */}
      <main className="container mx-auto mt-20 flex flex-col lg:flex-row py-10 px-6 lg:px-10">
        {/* Sidebar */}
        <aside className="bg-purple-200 w-full lg:w-1/4 p-4 rounded-lg mb-6 lg:mb-0">
          <ul className="space-y-4 text-gray-700">
            {services.map((service, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setSelectedSubtitle(service.subtitles[0]);
                  }}
                  className="block w-full text-left py-2 px-4 rounded hover:bg-purple-300"
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Documentation Content */}
        <section className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-md text-left">
          <h2 className="text-2xl font-bold mb-4">
            Dokumentasi Tata Cara Pembuatan Dokumen
          </h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              {selectedService.title}
            </h3>
            <select
              className="mb-4 p-2 border rounded"
              value={selectedSubtitle.subtitle}
              onChange={(e) =>
                setSelectedSubtitle(
                  selectedService.subtitles.find(
                    (subtitle) => subtitle.subtitle === e.target.value
                  )
                )
              }
            >
              {selectedService.subtitles.map((subtitle, idx) => (
                <option key={idx} value={subtitle.subtitle}>
                  {subtitle.subtitle}
                </option>
              ))}
            </select>
            <p className="mb-2 font-semibold">Persyaratan: </p>
            <ul className="list-disc list-inside mb-4">
              {selectedSubtitle.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <p className="mb-2 font-semibold">Prosedur: </p>
            <ol className="list-decimal list-inside space-y-1">
              {selectedSubtitle.procedures.map((proc, idx) => (
                <li key={idx}>{proc}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      {/* Footer Section */}
    </div>
  );
};

export default Pelayanan;
