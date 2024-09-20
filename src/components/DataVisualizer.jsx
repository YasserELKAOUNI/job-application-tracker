import React from 'react';
import { Bar } from 'react-chartjs-2';

function DataVisualizer({ data }) {
  const statusCounts = data.reduce((acc, curr) => {
    const status = curr.Status || 'Unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Applications by Status',
        data: Object.values(statusCounts),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  return (
    <div className="mt-4">
      <Bar data={chartData} />
    </div>
  );
}

export default DataVisualizer;