import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map(item => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}
