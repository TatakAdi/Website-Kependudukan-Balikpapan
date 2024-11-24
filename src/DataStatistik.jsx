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
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value / 1000}k`,
      },
    },
    colors: ["#1E40AF", "#10B981", "#3B82F6"],
  };

  const barChartSeries = [
    {
      name: "Data 1",
      data: [500000, 480000, 520000, 530000, 510000, 540000],
    },
    {
      name: "Data 2",
      data: [200000, 210000, 220000, 230000, 240000, 250000],
    },
    {
      name: "Data 3",
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
      <div className="lg:w-full bg-white rounded-lg overflow-hidden shadow-md">
        <div className="mb-10">
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={350}
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
    </div>
  );
};

export default DataStatistik;
