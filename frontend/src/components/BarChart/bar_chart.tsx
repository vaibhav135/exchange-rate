import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import "./bar_chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Currencies",
        color: "#635F5D",
        font: {
          lineHeight: 1.8,
          size: 18,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Rates",
        color: "#635F5D",
        font: {
          lineHeight: 1.8,
          size: 18,
        },
      },
      min: 0,
      max: 42000,
      ticks: {
        // forces step size to be 50 units
        stepSize: 500,
        color: "#635F5D",
      },
    },
  },
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        color: "#635F5D",
        font: {
          lineHeight: 1.8,
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: "exchange rates in bar chart",
      color: "#635F5D",
      font: {
        lineHeight: 1.8,
        size: 18,
      },
    },
  },
};

const BarChart = ({
  currency_names,
  currency_rates,
}: {
  currency_names: string[];
  currency_rates: number[];
}) => {
  const data = {
    labels: currency_names,
    datasets: [
      {
        label: "rates",
        data: currency_rates,
        borderColor: [
          "rgb(85, 255, 0)",
          "rgb(255, 153, 0)",
          "rgb(255, 242, 0)",
          "rgb(255, 98, 0)",
          "rgb(255, 60, 0)",
        ],
        backgroundColor: [
          "rgba(85, 255, 0, 0.2)",
          "rgba(255, 153, 0, 0.2)",
          "rgba(255, 242, 0, 0.2)",
          "rgba(255, 98, 0, 0.2)",
          "rgba(255, 60, 0, 0.2)",
        ],
      },
    ],
  };

  return (
    <div className="barChartWrapperDiv">
      <Bar options={options} data={data} height={400} />{" "}
    </div>
  );
};

export default BarChart;
