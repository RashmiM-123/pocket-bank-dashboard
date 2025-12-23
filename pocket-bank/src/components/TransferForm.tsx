import { useState } from "react";
import "./TransferForm.css";
import type { Transaction } from "../types/transaction";

type Props = {
  balance: number;
  onTransfer: (tx: Transaction) => void;
};

export default function TransferForm({ balance, onTransfer }: Props) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const numAmount = Number(amount);

    // 🔴 VALIDATIONS (CRITICAL)
    if (!recipient || !date) {
      setError("All fields are required");
      return;
    }

    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    if (numAmount > balance) {
      setError("Insufficient Funds");
      return;
    }

    // ⏳ SIMULATION
    setLoading(true);

    setTimeout(() => {
      const newTransaction: Transaction = {
        id: Date.now(),
        date,
        description: `Transfer to ${recipient}`,
        amount: numAmount,
        type: "debit",
      };

      onTransfer(newTransaction);

      setLoading(false);
      setSuccess("Transfer Successful ✔");

      // Reset form
      setRecipient("");
      setAmount("");
      setDate("");
    }, 1500);
  };

  return (
    <div className="transfer-card">
      <h3>Send Money</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

