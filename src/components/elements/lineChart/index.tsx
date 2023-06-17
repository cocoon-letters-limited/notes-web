import Chart from "react-apexcharts";
import React from "react";
// dd
function LineChart() {
  const data: any = {
    series: [
      {
        name: "Turbine",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Generator",
        data: [32, 29, 30, 36, 34, 28, 20],
      },
      {
        name: "Diesel Engine",
        data: [34, 30, 27, 24, 30, 34, 36],
      },
      {
        name: "CNC machine",
        data: [33, 30, 26, 26, 28, 32, 36],
      },
      {
        name: "Boom Lifts",
        data: [31, 28, 24, 24, 28, 31, 34],
      },
    ],
    options: {
      chart: {
        height: 350,
        stacked: false,
        type: "area",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
        },
      },
      colors: ["#F66716", "#16F62C", "#BC16F6", "#168BF6", "#FFD700"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
      },
      grid: {
        borderColor: "#E4E4E4",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["1", "2", "3", "4", "5", "6", "7"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        min: 5,
        max: 40,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };

  return (
    <div className="bg-[#F6F7FB] px-6 py-6 rounded-lg h-[27rem]">
      <div className="mt-1 overflow-auto">
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
}

export default LineChart;
