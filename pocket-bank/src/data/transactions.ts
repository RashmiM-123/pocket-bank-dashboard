import { Transaction } from "../types/transaction";

export const initialTransactions: Transaction[] = [
  {
    id: 1,
    date: "2024-01-01",
    description: "Salary",
    amount: 5000,
    type: "income",
  },
  {
    id: 2,
    date: "2024-01-02",
    description: "Groceries",
    amount: 1200,
    type: "expenses",
  },
];
