import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>title</h2>
        <div className="expense-item__price">Price</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
