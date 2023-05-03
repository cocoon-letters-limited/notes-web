import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "Risk Assessment",
      data: [5, 5, 3, 5, 5, 3, 5, 2, 5],
      backgroundColor: [
        "#C77987",
        "#C7C74F",
        "#4FB8D5",
        "#F4AA63",
        "#67BE6F",
        "#90A2D0",
      ],
      borderColor: [
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
      ],
      borderWidth: 3,
    },
  ],
};

export function PieChartCustom() {
  return <Pie data={data} />;
}
