import React from "react";
import Chart from "react-apexcharts";

const MaterialCard = () => {
  const colors = [
    "#06650F",
    "#F9E42F",
    "#16F62C",
    "#F99C2F",
    "#06650F",
    "#D12F1F",
  ];

  const data: any = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Lever"],
          ["Metal", "plate"],
          ["Clutch"],
          "Bolt",
          ["Battery"],
          ["Plug"],
        ],
        labels: {
          style: {
            colors,
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <div className="bg-[#F6F7FB] px-6 py-6 rounded-lg h-[27rem]">
      <h4 className="text-base md:text-lg xl:text-xl text-[#224280] font-bold">
        Material
      </h4>

      <div className="mt-1 overflow-auto">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default MaterialCard;
