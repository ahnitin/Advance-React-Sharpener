import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};
export default Expenses;
