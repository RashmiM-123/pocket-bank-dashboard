export type TransactionType = "income" | "expenses";

export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: TransactionType;
}

