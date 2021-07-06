import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
export default function ExpesnesList(props) {
  let expensesContent = (
    <h2 className="expenses-list__fallback">Found No Expenses</h2>
  );
  if (props.items.length === 0) {
    return expensesContent;
  }
  return (
    <ul className="expenses-list">
      {props.items.map(item => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}
