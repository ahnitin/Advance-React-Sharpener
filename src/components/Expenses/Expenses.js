import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import './Expenses.css'

const Expenses =(props)=>{
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} location={props.expenses[0].location} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} location={props.expenses[1].location} date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} location={props.expenses[2].location} date={props.expenses[2].date}></ExpenseItem>
        </Card>
    )
}
export default Expenses