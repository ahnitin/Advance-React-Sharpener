import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      title: "Car Insurance",
      amount: 294.64,
      location: "Mumbai",
      date: new Date(2024, 2, 11),
    },
    {
      title: "Toilet Paper",
      amount: 29.64,
      location: "Delhi",
      date: new Date(2023, 1, 11),
    },
    {
      title: "new Desk",
      amount: 95.64,
      location: "Patna",
      date: new Date(2023, 1, 11),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
