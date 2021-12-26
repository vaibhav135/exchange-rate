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

import "./line_chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      display: true,
      min: 0,
      max: 44000,
      ticks: {
        // forces step size to be 50 units
        stepSize: 1000,
        color: "#635F5D",
      },
      title: {
        display: true,
        text: "Rates against US Dollar",
        color: "#635F5D",
        font: {
          lineHeight: 1.8,
          size: 18,
        },
      },
    },
    x: {
      display: false,
    },
  },
  indexAxis: "x" as const,
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#635F5D",
        font: {
          lineHeight: 2.8,
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: "exchange rates in line chart",
      color: "#635F5D",
      font: {
        lineHeight: 1.8,
        size: 18,
      },
    },
  },
};

const LineChart = ({
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
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: false,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="lineChartWrapperDiv">
      <Line options={options} data={data} width={1400} height={800} />
    </div>
  );
};

export default LineChart;
