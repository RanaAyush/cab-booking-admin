import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const IncomeChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Cash',
        backgroundColor: '#3b82f6',
        data: [0, 0, 0, 0, 0, 0, 10000, 20000, 15000, 450000, 10000, 0],
      },
      {
        label: 'Wallet',
        backgroundColor: '#10b981',
        data: [0, 0, 0, 0, 0, 0, 0, 5000, 0, 0, 0, 0],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Income</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default IncomeChart;
