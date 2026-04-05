import React from "react";

export default function Insights({ transactions }) {
  const categoryTotals = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryTotals).reduce((a,b)=> categoryTotals[a] > categoryTotals[b] ? a : b, Object.keys(categoryTotals)[0]);

  return (
    <div>
      <h2>Insights</h2>
      <p>Highest spending category: {highest || "N/A"}</p>
    </div>
  );
}
