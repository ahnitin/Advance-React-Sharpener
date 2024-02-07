import React from "react";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};
export default NewExpense;
