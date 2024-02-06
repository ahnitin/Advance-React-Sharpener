import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked!!!");
  };
  const deleteHandler = () => {
    console.log("delete ho gaya");
  };
  const priceHandler = () => {
    setAmount("$100");
    console.log("clicked!!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3>{props.location}</h3>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={priceHandler}>Change Price</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
