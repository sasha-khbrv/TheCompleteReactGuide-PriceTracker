import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpensesItem/ExpensesItem";
import './Expenses.css';
import { useState } from "react";

function Expenses({data}) {
  const [filteredByDate, setFilteredByDate] = useState('all');
  const filteredByDateHandler = filteredDate => {
    setFilteredByDate(filteredDate);
    console.log(filteredDate);
  }
  return (
    <div className='expenses'>
      <ExpensesFilter onFilteredByDateHandler={filteredByDateHandler}/>
      {data.map(item => <ExpenseItem data={item} key={item.id}/>)}
    </div>
  );
}

export default Expenses;