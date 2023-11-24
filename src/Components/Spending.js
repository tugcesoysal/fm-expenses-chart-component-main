import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { SpendingData } from "../SpendingData";
import { Chart as ChartJS } from "chart.js/auto";

export default function Spending() {
  const [spendingData, setSpendingData] = useState({
    labels: SpendingData.map((data) => data.day),
    datasets: [
      {
        label: " ",
        data: SpendingData.map((data) => data.amount),
        backgroundColor: (context) => {
          return context.dataIndex === 2
            ? "hsl(186, 34%, 60%)"
            : "hsl(10, 79%, 65%)";
        },
        hoverBackgroundColor: (context) => {
          return context.dataIndex === 2
            ? "hsla(186, 34%, 60%, 0.7)"
            : "hsla(10, 79%, 65%, 0.7)";
        },
        borderRadius: 5,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
    ],
  });
  const options = {
    scales: {
      x: {
        display: true, // Show x-axis labels
        grid: {
          display: false, // Hide grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: true,
        display: false, // Hide y-axis labels
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const data = context.dataset.data[context.dataIndex];
            return `$${data}`;
          },
        },
        displayColors: false,
        xAlign: "center",
        yAlign: "bottom",
      },
    },
  };

  return (
    <div className="spending">
      <h1 className="spending_header">Spending - Last 7 days</h1>
      <div className="chart">
        <Bar data={spendingData} options={options} />
      </div>
      <div className="line"></div>
      <div className="bottomDiv">
        <div className="totalDiv">
          <p className="total_amount-parag">Total this month</p>
          <h1 className="total_data">$478.33</h1>
        </div>
        <div className="changeDiv">
          <h3 className="change_data">+2.4%</h3>
          <p className="from_last_month_parag">from last month</p>
        </div>
      </div>
    </div>
  );
}
