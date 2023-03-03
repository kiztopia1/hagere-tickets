import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import "./noOfSales.css";
let date = new Date();
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Number of sales this week ",
    },
  },
};

const labels = [
  "25 Feb 2023",
  "26 Feb 2023",
  "27 Feb 2023",
  "28 Feb 2023",
  "03 Mar 2023",
  "03 Mar 2023",
  "03 Mar 2023",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function noOfSales() {
  return (
    <div className="no-off-sales">
      <Line options={options} data={data} />
    </div>
  );
}
