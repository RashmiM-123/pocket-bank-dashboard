import "./BalanceCard.css";

type Props = {
  balance: number;
};

export default function BalanceCard({ balance }: Props) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(balance);

  return (
    <div className="balance-card">
      <p>Current Balance</p>
      <h2>{formatted}</h2>
    </div>
  );
}
