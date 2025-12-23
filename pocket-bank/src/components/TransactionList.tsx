import "./TransactionList.css";
import type { Transaction } from "../types/transaction";

type Props = {
  transactions: Transaction[];
};

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="transaction-card">
      <h3 className="title">Transactions</h3>

      {transactions.length === 0 ? (
        <p className="empty">No transactions found</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((tx) => (
            <li key={tx.id} className="transaction-row">
              <div className="left">
                <p className="desc">{tx.description}</p>
                <span className="date">{tx.date}</span>
              </div>

              <div
                className={`amount ${
                  tx.type === "credit" ? "credit" : "debit"
                }`}
              >
                {tx.type === "credit" ? "+" : "-"}$
                {tx.amount.toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

