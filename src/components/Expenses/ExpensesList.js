import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Available!!!</p>;
  }
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpensesList;
