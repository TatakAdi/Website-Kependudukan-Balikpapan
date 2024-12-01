import React from "react";
import Chart from "react-apexcharts";
import Header from "./Components/Header";

const DataStatistik = () => {
  const barChartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    title: {
      text: "Sumber: Data Konsolidasi Bersih",
      align: "center",
      style: { fontSize: "18px" },
    },
    xaxis: {
      categories: [
        "DKB SEMESTER I TAHUN 2018",
        "DKB SEMESTER I TAHUN 2019",
        "DKB SEMESTER I TAHUN 2020",
        "DKB SEMESTER I TAHUN 2021",
        "DKB SEMESTER I TAHUN 2022",
        "DKB SEMESTER I TAHUN 2023",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
        rotate: -30, 
        hideOverlappingLabels: true,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value / 1000}k`, 
      },
    },
    colors: ["#1E40AF", "#10B981", "#3B82F6"],
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000"], 
      },
      offsetY: -5, 
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val.toLocaleString()}`, 
      },
    },
  };

  const barChartSeries = [
    {
      name: "Jumlah Penduduk",
      data: [500000, 480000, 520000, 530000, 510000, 540000],
    },
    {
      name: "Jumlah Laki-Laki",
      data: [200000, 210000, 220000, 230000, 240000, 250000],
    },
    {
      name: "Jumlah Perempuan",
      data: [150000, 160000, 170000, 180000, 190000, 200000],
    },
  ];

  const pieChartOptions = {
    labels: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu"],
    legend: {
      position: "bottom",
    },
  };

  const pieChartSeries = [85, 8, 5, 1, 0.5, 0.5];

  return (
    <div className="container mx-auto p-6 mt-20">
      <header>
        <Header />
      </header>
      <div className="lg:w-full bg-white rounded-lg overflow-x-auto shadow-md">
        <div className="min-w-[800px]">
          {" "}
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={400}
          />
        </div>
      </div>
      <div className="lg:w-full bg-white rounded-lg overflow-hidden shadow-md mt-10">
        <h2 className="text-center text-lg font-bold mb-4">
          Data Berdasarkan Agama
        </h2>
        <Chart
          options={pieChartOptions}
          series={pieChartSeries}
          type="pie"
          height={300}
        />
      </div>

      {/* Statistik Tabel */}
      <div className="lg:w-full bg-white rounded-lg overflow-hidden shadow-md mt-10 p-6">
        <h2 className="text-center text-lg font-bold mb-4">
          Nilai Unsur Pelayanan Dinas Kependudukan dan Pencatatan Sipil Tahun
          2024
        </h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Unsur Pelayanan</th>
              <th className="px-4 py-2 text-left">
                Nilai Rata-Rata Unsur Pelayanan
              </th>
              <th className="px-4 py-2 text-left">
                Nilai Index Unit Pelayanan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Persyaratan Pelayanan</td>
              <td className="px-4 py-2">3.669</td>
              <td className="px-4 py-2">0.408</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Prosedur Pelayanan</td>
              <td className="px-4 py-2">3.711</td>
              <td className="px-4 py-2">0.412</td>
            </tr>
            <tr>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">Kecepatan Pelayanan</td>
              <td className="px-4 py-2">3.866</td>
              <td className="px-4 py-2">0.366</td>
            </tr>
            <tr>
              <td className="px-4 py-2">4</td>
              <td className="px-4 py-2">Kemampuan Petugas Pelayanan</td>
              <td className="px-4 py-2">3.603</td>
              <td className="px-4 py-2">0.399</td>
            </tr>
            <tr>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">Kesesuaian Produk Pelayanan</td>
              <td className="px-4 py-2">3.619</td>
              <td className="px-4 py-2">0.399</td>
            </tr>
            <tr>
              <td className="px-4 py-2">6</td>
              <td className="px-4 py-2">Kesesuaian Sarana dan Prasarana</td>
              <td className="px-4 py-2">3.591</td>
              <td className="px-4 py-2">0.399</td>
            </tr>
            <tr>
              <td className="px-4 py-2">7</td>
              <td className="px-4 py-2">Keterampilan dan Kemampuan Petugas</td>
              <td className="px-4 py-2">3.591</td>
              <td className="px-4 py-2">0.399</td>
            </tr>
            <tr>
              <td className="px-4 py-2">8</td>
              <td className="px-4 py-2">Kepastian dan Keamanan Petugas</td>
              <td className="px-4 py-2">3.619</td>
              <td className="px-4 py-2">0.399</td>
            </tr>
            <tr>
              <td className="px-4 py-2">9</td>
              <td className="px-4 py-2">Kualitas Sarana dan Prasarana</td>
              <td className="px-4 py-2">3.661</td>
              <td className="px-4 py-2">0.412</td>
            </tr>
            <tr>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2">Penggunaan Pengguna Layanan</td>
              <td className="px-4 py-2">3.905</td>
              <td className="px-4 py-2">0.404</td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                IKM Unit Pelayanan
              </td>
              <td className="px-4 py-2" colSpan="2">
                3.650
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Mutu Pelayanan
              </td>
              <td className="px-4 py-2" colSpan="2">
                9.124
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Kinerja Unit Pelayanan
              </td>
              <td className="px-4 py-2" colSpan="2">
                A
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataStatistik;
