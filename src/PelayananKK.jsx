import React, { useState } from "react";
import Header from "./Components/Header";
import FormUniversal from "./Components/FormUniversal";
import { useNavigate } from "react-router-dom";

const Pelayanan = () => {
  const [jenisPelayanan, setJenisPelayanan] = useState("");

  const navigate = useNavigate();

  const formUploadField = {
    KKBaru: [
      { label: "Fotokopi KK Pihak Suami" },
      { label: "Fotokopi KK Pihak Istri" },
      { label: "Fotokopi Buku Nikah atau Akta Pernikahan" },
    ],
    PisahKK: [
      { label: "Fotokopi Kartu Keluarga" },
      { label: "Fotokopi Akta Perceraian" },
    ],
    PindahKK: [
      { label: "Fotokopi Kartu Keluarga Asal (Jika Ada)" },
      { label: "Fotokopi Kartu Keluarga Tujuan" },
      { label: "Fotokopi Surat Peryataan Pemindahan Hak Asuh Anak" },
    ],
    KKHilangRusak: [
      { label: "Surat Keterangan Hilang dari Pihak Kepolisian (Jika Hilang)" },
      { label: "Foto KK Asli yang Rusak (Jika Rusak)" },
    ],
    PerubahanData: [
      { label: "Fotokopi Kartu Keluarga yang Lama" },
      {
        label:
          "Fotokopi dokumen Pendukung (Akta Kelahiran, Ijazah, Buku Nikah, dsb.)",
      },
    ],
  };

  const handleSubmit = () => {
    alert("Form berhasil dikirim!");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="w-full p-8 bg-white rounded-md container mx-auto mt-20">
        <h2 className="flex justify-start text-4xl font-bold mb-6 ">
          {" "}
          Layanan Kartu Keluarga
        </h2>

        <FormUniversal />

        <div className="mb-6">
          <label className="flex justify-start text-sm font-medium text-gray-700">
            {" "}
            Jenis Pelayanan
          </label>
          <select
            value={jenisPelayanan}
            onChange={(e) => setJenisPelayanan(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Pilih Jenis Pelayanan</option>
            <option value="KKBaru">Kartu Keluarga Baru</option>
            <option value="PisahKK">Pisah/Pecah Kartu Keluarga</option>
            <option value="PindahKK">Pindah Kartu Keluarga</option>
            <option value="KKHilangRusak">
              Pergantian Kartu Keluarga karena Hilang/Rusak
            </option>
            <option value="PerubahanData">
              Pergantian Kartu Keluarga karena Perubahan Data
            </option>
          </select>
        </div>

        {jenisPelayanan && (
          <div className="mt-8 space-y-4">
            {formUploadField[jenisPelayanan].map((field, index) => (
              <div key={index}>
                <label className="flex justify-start text-sm font-medium text-gray-700">
                  Upload {field.label}
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
