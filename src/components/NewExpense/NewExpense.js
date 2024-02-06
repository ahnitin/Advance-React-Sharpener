import React from "react";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};
export default NewExpense;
