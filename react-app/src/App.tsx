import { useState } from "react";
// import Form3 from "./components/Form3";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "apple", amount: 10, category: "Fruits" },
    { id: 2, description: "banana", amount: 10, category: "Fruits" },
    { id: 3, description: "coconut", amount: 10, category: "Fruits" },
  ]);

  return (
    <>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((event) => event.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;
