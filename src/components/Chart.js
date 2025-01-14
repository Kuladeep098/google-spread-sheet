import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Chart = ({ data }) => {
  // Convert the spreadsheet data into a format that Chart.js can understand
  const chartData = {
    labels: Object.keys(data), // X-axis labels from the spreadsheet keys (e.g., A1, B1, C1)
    datasets: [
      {
        label: "Values",
        data: Object.values(data).map((value) => parseFloat(value) || 0), // Y-axis data from spreadsheet values
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)", // Line color and transparency
        fill: true, // Fill area under the line chart
      },
    ],
  };

  // Chart options (optional)
  const options = {
    responsive: true, // Make the chart responsive to screen size changes
    scales: {
      x: {
        title: {
          display: true,
          text: "Cells", // Label for the X-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Values", // Label for the Y-axis
        },
        beginAtZero: true, // Ensure the Y-axis starts at 0
      },
    },
  };

  return (
    <div style={{ width: "80%", height: "400px", margin: "20px auto" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
