//  import "./TransactionFilter.css";

// type Props = {
//   selected: "all" | "income" | "expenses";
//   onChange: (value: "all" | "income" | "expenses") => void;
// };

// export default function TransactionFilter({ selected, onChange }: Props) {
//   return (
//     <div className="filter-container">
//       <button
//         className={selected === "all" ? "active" : ""}
//         onClick={() => onChange("all")}
//       >
//         All
//       </button>

//       <button
//         className={selected === "income" ? "active" : ""}
//         onClick={() => onChange("income")}
//       >
//         Income
//       </button>

//       <button
//         className={selected === "expenses" ? "active" : ""}
//         onClick={() => onChange("expenses")}
//       >
//         Expenses
//       </button>
//     </div>
//   );
// }
import "./TransactionFilter.css";
import { FilterType } from "../types";

type Props = {
  selected: FilterType;
  onChange: React.Dispatch<React.SetStateAction<FilterType>>;
};

export default function TransactionFilter({ selected, onChange }: Props) {
  return (
    <div className="filter-container">
      <button
        className={selected === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        All
      </button>

      <button
        className={selected === "income" ? "active" : ""}
        onClick={() => onChange("income")}
      >
        Income
      </button>

      <button
        className={selected === "expenses" ? "active" : ""}
        onClick={() => onChange("expenses")}
      >
        Expenses
      </button>
    </div>
  );
}
