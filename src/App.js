import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

const initialData = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 1000, category: "Shopping", type: "expense" }
];

export default function App() {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");

  return (
    <div className="container">
      <header>
        <h1>Finance Dashboard</h1>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </header>

      <Dashboard transactions={transactions} />
      <Transactions transactions={transactions} setTransactions={setTransactions} role={role} />
      <Insights transactions={transactions} />
    </div>
  );
}
