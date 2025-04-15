import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
      // position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Overall Turnover',
      // text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Average',
      data: [1000, 3000, 5000, 7000, 9000, 6000, 4000],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'red',
    },
    {
      label: 'Report data',
      data: [3000, 4000, 5000, 1000, 3000, 6000, 9000],
      backgroundColor: 'black',
    },
  ],
};

// export function App() {
//   // return <Bar options={options} data={data} />;
// }



function OurChart() {
  return (
    <div className="w-full h-full">
      <Bar options={options} data={data} />
    </div>
  )
}

export default OurChart
