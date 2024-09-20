// src/components/ui/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const statusCounts = data.reduce((acc, curr) => {
    const status = curr.status || 'Unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Applications par Statut',
        data: Object.values(statusCounts),
        backgroundColor: [
          'rgba(34, 197, 94, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(239, 68, 68, 0.6)',
          'rgba(156, 163, 175, 0.6)'
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(156, 163, 175, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Répartition par Statut</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;