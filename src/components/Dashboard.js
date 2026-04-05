import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export default function Dashboard({ transactions }) {
  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0);
  const expenses = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0);

  const data = {
    labels: ["Income", "Expenses"],
    datasets: [{
      data: [income, expenses]
    }]
  };

  return (
    <div>
      <h2>Overview</h2>
      <div className="cards">
        <div className="card">Balance: ₹{income - expenses}</div>
        <div className="card">Income: ₹{income}</div>
        <div className="card">Expenses: ₹{expenses}</div>
      </div>
      <Pie data={data} />
    </div>
  );
}
