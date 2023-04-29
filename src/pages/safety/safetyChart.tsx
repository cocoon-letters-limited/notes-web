import { Chart } from "react-chartjs-2";

const SafetyChartPieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      <Chart data={data} type="pie" />
    </div>
  );
};

export default SafetyChartPieChart;
