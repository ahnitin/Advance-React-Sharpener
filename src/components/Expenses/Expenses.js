import ExpensesList from "./ExpensesList.js";
import Card from "../UI/Card.js";
import ExpenseFilter from "../NewExpense/ExpenseFilter.js";
import ExpensesChart from "./ExpensesChart.js";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
      {filteredExpenses.length === 1 && (
        <p>Only one Expense Available Add More Expenses!</p>
      )}
    </Card>
  );
};
export default Expenses;
