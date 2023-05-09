import React from "react";
import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" className="form-control" />
      </div>
      <div className="b-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value="">Choose an option</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
