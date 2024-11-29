import React, { useState } from "react";

const Pelayanan = () => {
  const [usia, setUsia] = useState(10);

  return (
    <>
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
            Pekerjaan
          </label>
          <input
            type="text"
            placeholder="Mahasiswa"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="flex justify-start text-sm font-medium text-gray-700">
            Nama Belakang
          </label>
          <input
            type="text"
            placeholder="Mujhidin"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="flex justify-start text-sm font-medium text-gray-700">
            Nama Orang Tua Ayah
          </label>
          <input
            type="text"
            placeholder="Sumanto"
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
            Nama Orang Tua Ibu
          </label>
          <input
            type="text"
            placeholder="Siska"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
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
                min="10"
                max="100"
                value={usia}
                onChange={(e) => {
                  const newValue = Math.max(10, Math.min(100, e.target.value));
                  setUsia(newValue);
                }}
                className="w-full appearance-none bg-gray-200 h-1 rounded-lg accent-black"
              />
              <input
                type="number"
                min="10"
                max="100"
                value={usia}
                onChange={(e) => {
                  const newValue = Math.max(10, Math.min(100, e.target.value));
                  setUsia(newValue);
                }}
                className="w-14 text-center py-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-6 col-span-2">
          <div className="col-span-2 w-full">
            <label className="flex justify-start text-sm font-medium text-gray-700">
              Alamat
            </label>
            <textarea
              placeholder="Jl. MT Haryono RT 01 RW 02"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              rows="5"
            ></textarea>
          </div>
          <div className="w-full">
            <label className="flex justify-start text-sm font-medium text-gray-700">
              No. Telepon
            </label>
            <input
              type="text"
              placeholder="cth: +628xxxxxxxxx"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pelayanan;
