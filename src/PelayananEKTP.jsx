import React, { useState } from "react";
import Header from "./Components/Header";
import FormUniversal from "./Components/FormUniversal";
import { useNavigate } from "react-router-dom";

const Pelayanan = () => {
  const [jenisPelayanan, setJenisPelayanan] = useState("");

  const formUploadField = {
    kartuBaru: [
      { label: "Upload Fotokopi Kartu Keluarga" },
      { label: "Upload Akta Kelahiran" },
      { label: "Upload Surat Pengantar dari RT/RW" },
    ],
    kartuRusakHilang: [
      { label: "Upload Fotokopi Kartu Keluarga" },
      { label: "Upload Surat Keterangan Kehilangan dari Pihak Kepolisian" },
      { label: "Upload Foto Asli EKTP yang Rusak" },
    ],
    kartuGantiData: [
      { label: "Upload Fotokopi Kartu Keluarga yang Terbaru" },
      { label: "Upload EKTP Lama" },
    ],
    kartuIdentitasAnak: [
      { label: "Upload Fotokopi Kartu Keluarga" },
      { label: "Upload Fotokopi Akta Kelahrian Anak" },
      { label: "Upload Surat Pengantar dari RT/RW Tempat Tinggal" },
    ],
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Form berhasil dikirim!");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="w-full p-8 bg-white rounded-md container mx-auto">
        <h2 className="flex justify-start text-4xl font-bold mb-6">
          Layanan E-KTP
        </h2>

        <FormUniversal />
        <div className="my-6">
          <label className="flex justify-start text-sm font-medium text-gray-700">
            Jenis Pelayanan
          </label>
          <select
            value={jenisPelayanan}
            onChange={(e) => setJenisPelayanan(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Pilih Jenis Pelayanan</option>
            <option value="kartuBaru">E-KTP Baru</option>
            <option value="kartuRusakHilang">
              Ganti E-KTP karena Rusak/Hilang
            </option>
            <option value="kartuGantiData">
              Ganti E-KTP karena data berubah
            </option>
            <option value="kartuIdentitasAnak">
              Pembuatan Kartu Identitas Anak
            </option>
          </select>
        </div>
        {jenisPelayanan && (
          <div className="mt-8 space-y-4">
            {formUploadField[jenisPelayanan].map((field, index) => (
              <div key={index}>
                <label className="flex justify-start text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type="file"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            ))}
            ;
          </div>
        )}

        <div className="mt-6 text-right">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded-md"
          >
            {" "}
            Kirim ➔
          </button>
        </div>
      </div>
    </>
  );
};

export default Pelayanan;
