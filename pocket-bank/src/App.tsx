import { useMemo, useState } from "react";
import "./App.css";

import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import TransactionFilter from "./components/TransactionFilter";
import TransferForm from "./components/TransferForm";

import { initialTransactions } from "./data/transactions";
import type { Transaction } from "./types/transaction";
import type { FilterType } from "./types/filter";

export default function App() {
  // 🔹 State
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const [filter, setFilter] = useState<FilterType>("all");

  // 🔹 Balance Calculation
  const balance = useMemo(() => {
    return transactions.reduce((total, tx) => {
      return tx.type === "income"
        ? total + tx.amount
        : total - tx.amount;
    }, 0);
  }, [transactions]);

  // 🔹 Filter Logic
  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter((tx) => tx.type === filter);
  }, [transactions, filter]);

  // 🔹 Add New Transaction
  const handleTransfer = (newTx: Transaction) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  return (
    <div className="app-container">
      <BalanceCard balance={balance} />

      <TransactionFilter
        selected={filter}
        onChange={setFilter}
      />

      <TransactionList
        transactions={filteredTransactions}
      />

      <TransferForm
        balance={balance}
        onTransfer={handleTransfer}
      />
    </div>
  );
}

