// src/components/ui/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function LineChart({ data }) {
  const applicationsByMonth = data.reduce((acc, curr) => {
    const month = curr.dateApplied ? new Date(curr.dateApplied).toLocaleString('default', { month: 'short', year: 'numeric' }) : 'Unknown';
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const sortedMonths = Object.keys(applicationsByMonth).sort((a, b) => new Date(a) - new Date(b));

  const chartData = {
    labels: sortedMonths,
    datasets: [
      {
        label: 'Applications par Mois',
        data: sortedMonths.map(month => applicationsByMonth[month]),
        fill: false,
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tendance des Applications</h2>
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;