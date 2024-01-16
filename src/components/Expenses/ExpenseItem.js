import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css' ;
import Card from '../UI/Card';
const ExpenseItem=(props)=>
{   
    const clickHandler = ()=>{
        console.log("Clicked!!!")
    }
    const deleteHandler =()=>{
        console.log("delete ho gaya")
    }
    return (   
    <Card className ="expense-item">
        <ExpenseDate date ={props.date}/>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
    )
}

export default ExpenseItem;