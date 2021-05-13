import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css';

function Expenses({data}) {

  return (
    <div className='expenses'>
      {data.map(item => <ExpenseItem data={item} key={item.id}/>)}
    </div>
  );
}

export default Expenses;