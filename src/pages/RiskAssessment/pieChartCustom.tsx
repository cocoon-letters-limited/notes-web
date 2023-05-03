import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "Mechanical",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#C77987",
        "#C7C74F",
        "#4FB8D5",
        "#F4AA63",
        "#67BE6F",
        "#90A2D0",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChartCustom() {
  return <Pie data={data} />;
}
