import React, { useState } from "react";
import Header from "./Components/Header";

const Pelayanan = () => {
  const [usia, setUsia] = useState(0);
  const [jenisPelayanan, setJenisPelayanan] = useState("");

  return (
    <>
      <Header></Header>
      <div className="w-screen p-8 bg-white rounded-md container  mx-auto">
        <h2 className="flex justify-start text-4xl font-bold mb-6 mt-1">
          Layanan E-KTP
        </h2>

        <div className="mb-6">
          <label className="flex justify-start text-sm font-medium text-gray-700">
            Jenis Pelayanan
          </label>
          <select
            value={jenisPelayanan}
            onChange={(e) => setJenisPelayanan(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Pilih Jenis Pelayanan</option>
            <option value="kartubaru">E-KTP Baru</option>
            <option value="karturusak">Ganti E-KTP karena Rusak/Hilang</option>
            <option value="kartudata">Ganti E-KTP karena data berubah</option>
            <option value="kartuanak">Pembuatan Kartu Identitas Anak</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex justify-start  text-sm font-medium text-gray-700">
              Nama Depan & Nama Tengah
            </label>
            <input
              type="text"
              placeholder="Samuel Arifin"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Nama Belakang
            </label>
            <input
              type="text"
              placeholder="Mujahidin"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Pekerjaan
            </label>
            <input
              type="text"
              placeholder="Mahasiswa"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start  text-sm font-medium text-gray-700">
              NIK
            </label>
            <input
              type="text"
              placeholder="cth: 12324xxxxxxxx"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Nama Ayah
            </label>
            <input
              type="text"
              placeholder="Sumanto"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start  text-sm font-medium text-gray-700">
              NIK Ayah
            </label>
            <input
              type="text"
              placeholder="cth: 12324xxxxxxxx"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Nama Ibu
            </label>
            <input
              type="text"
              placeholder="Siska"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="flex justify-start  text-sm font-medium text-gray-700">
              NIK Ibu
            </label>
            <input
              type="text"
              placeholder="cth: 12324xxxxxxxx"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-6 col-span-2">
          <div className="w-full sm:w-1/2">
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Jenis Kelamin
            </label>
            <div className="mt-1 flex sm:flex-row flex-col items-start sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="accent-black mr-2"
                />
                Laki-Laki
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="accent-black mr-2"
                />
                Perempuan
              </label>
            </div>
          </div>
          <div className="w-1/2">
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Usia
            </label>
            <div className="flex items-center mt-1 space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={usia}
                onChange={(e) => setUsia(e.target.value)}
                className="w-full appearance-none bg-gray-200 h-1 rounded-lg accent-black"
              />
              <input
                type="number"
                min="0"
                max="100"
                value={usia}
                onChange={(e) => setUsia(e.target.value)}
                className="w-14 text-center py-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 w-1/2">
          <label className="flex justify-start text-sm font-medium text-gray-700">
            Alamat
          </label>
          <textarea
            placeholder="Jl. MT Haryono RT 01 RW 02"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            No. Telepon
          </label>
          <input
            type="text"
            placeholder="cth: +628xxxxxxxxx"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {jenisPelayanan && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <div className="space-y-4">
              {jenisPelayanan === "kartubaru" && (
                <>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Fotokopi Kartu Keluarga
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Akta Kelahiran
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Surat Pengantar dari RT/RW
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Pas Foto 4x6
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </>
              )}
              {jenisPelayanan === "karturusak" && (
                <>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Fotokopi Kartu Keluarga
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Akta Kelahiran
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Surat Pengantar dari RT/RW
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Surat Keterangan Kehilangan E-KTP (Jika Hilang)
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload E-KTP Lama (Jika Rusak)
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </>
              )}
              {jenisPelayanan === "kartudata" && (
                <>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Fotokopi Kartu Keluarga
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Akta Kelahiran
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Surat Pengantar dari RT/RW
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload E-KTP Lama
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </>
              )}
              {jenisPelayanan === "kartuanak" && (
                <>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Fotokopi Kartu Keluarga
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Akta Kelahiran
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Surat Pengantar dari RT/RW
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="flex justify-start text-sm font-medium text-gray-700">
                      Upload Pas Foto 4x6
                    </label>
                    <input
                      type="file"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 text-right">
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Selanjutnya ➔
          </button>
        </div>
      </div>
    </>
  );
};

export default Pelayanan;
