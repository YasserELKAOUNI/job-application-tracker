// src/components/ui/ScatterPlot.jsx
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function ScatterPlot({ data }) {
  const scatterData = data
    .filter(job => job.salary && !isNaN(parseFloat(job.salary.replace(/[^0-9.-]+/g,""))))
    .map(job => ({
      x: parseFloat(job.salary.replace(/[^0-9.-]+/g,"")),
      y: job.status === 'Offre' ? 4 :
         job.status === 'Entretien' ? 3 :
         job.status === 'Postulé' ? 2 :
         1
    }));

  const chartData = {
    datasets: [
      {
        label: 'Salaire vs Statut',
        data: scatterData,
        backgroundColor: 'rgba(168, 85, 247, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Salaire ($)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Statut',
        },
        ticks: {
          callback: function(value) {
            switch(value) {
              case 1: return 'Refusé';
              case 2: return 'Postulé';
              case 3: return 'Entretien';
              case 4: return 'Offre';
              default: return '';
            }
          }
        }
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const yValue = context.parsed.y;
            const status = yValue === 4 ? 'Offre' :
                           yValue === 3 ? 'Entretien' :
                           yValue === 2 ? 'Postulé' : 'Refusé';
            return `Salaire: $${context.parsed.x}, Statut: ${status}`;
          }
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Salaire vs Statut</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
}

export default ScatterPlot;