import React, { useState } from "react";
import Header from "./Components/Header";
import FormUniversal from "./Components/FormUniversal";
import { useNavigate } from "react-router-dom";

const Pelayanan = () => {
  const [jenisPelayanan, setJenisPelayanan] = useState("");

  const formUploadField = {
    pernikahanWNI: [
      {
        label:
          "Fotokopi Surat Keterangan terjadinya pernikahan dari Dinas Keagamaan",
      },
      {
        label: "Pas Foto Berwarna Pengantin Pria",
      },
      { label: "Pas Foto Berwarna Pengantin Wanita" },
      {
        label: "Fotokopi Kartu Keluarga dari Keluarga Pihak Pria",
      },
      {
        label: "Fotokopi Kartu Keluarga dari Keluarga Pihak Wanita",
      },
      { label: "Fotokopi EKTP Pengantin Pria" },
      { label: "Fotokopi EKTP Pengantin Wanita" },
    ],
    pernikahanWNA: [
      {
        label:
          "Fotokopi Surat Keterangan Terjadinya Pernikahan dari Negara Asal",
      },
      { label: "Fotokopi Visa atau Izin Jalan di Indonesia" },
      { label: "Fotokopi Surat Keterangan Pindah Luar Negeri" },
      { label: "Pas Foto Bewarna Pengantin Pria" },
      { label: "Pas Foto Berwarna Pengantin Wanita" },
    ],
    AktaHilangRusak: [
      {
        label:
          "Surat Keterangan Kehilangan dari Pihak Kepolisian (Jika Hilang)",
      },
      { label: "Foto Akta Pernikahan Asli yang Rusak (Jika Rusak)" },
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
          Layanan Akta Nikah
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
            <option value="pernikahanWNI">Pencatatan Pernikahan WNI</option>
            <option value="pernikahanWNA">Pencatatan Pernikahan WNA</option>
            <option value="AktaHilangRusak">Akta Hilang/Rusak</option>
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
