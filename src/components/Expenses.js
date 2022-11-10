import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.data.map((el) => (
        <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
      ))}
    </Card>
  );
}

export default Expenses;
