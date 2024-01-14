// components/Graph.js
import React from 'react';
import { Line } from 'react-chartjs-2'; // Import only the necessary chart type
import { CategoryScale, LinearScale, Chart, PointElement, LineElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const Graph = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Net Cash Flow',
        data: data.netCashFlow,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Set to 'category' for categorical data (e.g., labels)
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        type: 'linear', // Use 'linear' for numeric data on the Y-axis
        title: {
          display: true,
          text: 'Net Cash Flow',
        },
      },
    },
  };

  return (
    <div>
      <h2>Break-Even Analysis</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Graph;
