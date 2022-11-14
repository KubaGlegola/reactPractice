import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesFilter />

      {props.data.map((el) => (
        <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
      ))}
    </Card>
  );
}

export default Expenses;
