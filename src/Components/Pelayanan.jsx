const Pelayanan = () => {
  const services = [
    {
      title: 'KTP Elektronik',
      requirements: ['Fotokopi Kartu Keluarga'],
      procedures: [
        'Akses web Disdukcapil Balikpapan untuk antrean online.',
        'Pilih layanan "KTP Elektronik Baru".',
        'Isi formulir pendaftaran dan dapatkan nomor antrean.',
        'Datang ke kantor Disdukcapil untuk verifikasi dan foto.',
        'Pemohon mengambil KTP yang sudah dicetak.',
      ],
    },
    {
      title: 'Kartu Keluarga',
      requirements: [
        'Surat pengantar RT/RW',
        'Fotokopi KTP dan akta kelahiran seluruh anggota keluarga',
      ],
      procedures: [
        'Kunjungi situs Disdukcapil dan pilih layanan "Kartu Keluarga".',
        'Isi formulir pendaftaran secara online.',
        'Unggah dokumen yang diperlukan sesuai persyaratan.',
        'Ambil Kartu Keluarga di kantor Disdukcapil atau melalui pengiriman online.',
      ],
    },
    {
      title: 'Kartu Identitas Anak (KIA)',
      requirements: [
        'Fotokopi Kartu Keluarga',
        'Fotokopi Akta Kelahiran Anak',
        'Pas foto ukuran 3x4',
      ],
      procedures: [
        'Kunjungi situs Disdukcapil Balikpapan untuk antrean online.',
        'Pilih layanan "Kartu Identitas Anak".',
        'Isi formulir dan unggah dokumen sesuai persyaratan.',
        'Ambil KIA di kantor atau gunakan jasa pengiriman.',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">PEMERINTAH KOTA BALIKPAPAN</h1>
          <nav className="space-x-4" aria-label="Main Navigation">
            <a href="#" className="hover:text-gray-300">Pelayanan</a>
            <a href="#" className="hover:text-gray-300">Berita</a>
            <a href="#" className="hover:text-gray-300">Regulasi</a>
            <a href="#" className="hover:text-gray-300">Data Statistik</a>
            <a href="#" className="hover:text-gray-300">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto flex flex-col lg:flex-row py-10 px-6 lg:px-10">
        {/* Sidebar */}
        <aside className="bg-purple-200 w-full lg:w-1/4 p-4 rounded-lg mb-6 lg:mb-0">
          <ul className="space-y-4 text-gray-700">
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-purple-300">KTP Elektronik</a></li>
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-purple-300">Akta Kelahiran</a></li>
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-purple-300">Akta Kematian</a></li>
            <li><a href="#" className="block py-2 px-4 rounded hover:bg-purple-300">Kartu Keluarga</a></li>
          </ul>
        </aside>

        {/* Documentation Content */}
        <section className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Dokumentasi Tata Cara Pembuatan Dokumen</h2>
          {services.map((service, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-2 font-semibold">Persyaratan:</p>
              <ul className="list-disc list-inside mb-4">
                {service.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
              </ul>
              <p className="mb-2 font-semibold">Prosedur:</p>
              <ol className="list-decimal list-inside space-y-1">
                {service.procedures.map((proc, idx) => <li key={idx}>{proc}</li>)}
              </ol>
            </div>
          ))}
        </section>
      </main>

      {/* Footer Section */}
<footer className="bg-purple-800 text-white py-8">
  <div className="container mx-auto px-6 lg:px-11 grid grid-cols-1 lg:grid-cols-6 gap-10">
    <div>
      <h3 className="font-bold text-lg">For More Information</h3>
      <div className="flex flex-col space-y-4 mt-2">
        <a href="#" className="bg-white p-2 rounded-full text-purple-800">Facebook</a>
        <a href="#" className="bg-white p-2 rounded-full text-purple-800">Instagram</a>
        <a href="#" className="bg-white p-2 rounded-full text-purple-800">YouTube</a>
        <a href="#" className="bg-white p-2 rounded-full text-purple-800">Twitter</a>
      </div>
    </div>
          <div className="col-span-8">
            <h3 className="font-bold text-lg">Our Office</h3>
            <p className="text-sm mt-2">Jl. Letjen Suprapto, Balikpapan, Kalimantan Timur, Indonesia</p>
            <iframe className="mt-4 w-50 h-50" src="https://www.google.com/maps/embed?..." allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pelayanan;
