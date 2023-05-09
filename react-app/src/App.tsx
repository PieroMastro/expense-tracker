import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Entertainment", "Groceries", "Utilities"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "apple", amount: 10, category: "Groceries" },
    { id: 2, description: "banana", amount: 10, category: "Groceries" },
    { id: 3, description: "coconut", amount: 10, category: "Groceries" },
    { id: 4, description: "usb cable", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <div className="mb-5">
          <ExpenseForm />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
