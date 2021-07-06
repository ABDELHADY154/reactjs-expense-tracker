import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [formVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = enteredData => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setFormVisible(true);
  };
  const endEditingHandler = () => {
    setFormVisible(false);
  };
  return (
    <div className="new-expense">
      {!formVisible && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={endEditingHandler}
        />
      )}
    </div>
  );
}
