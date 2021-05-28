import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpensesItem/ExpensesItem";
import './Expenses.css';
import { useState } from "react";

function Expenses({data}) {
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredByYearHandler = chosenYear => {
    setSelectedYear(chosenYear);
  }

  const expensesItems = data
    .filter( item => {
      if(selectedYear === 'all') return item;
      return item.date.getFullYear().toString() === selectedYear;})
    .map(item => 
      <ExpenseItem props={item} key={`${item.id}-${item.name}`}/>);

  return (
    <div className='expenses'>
      <ExpensesFilter onFilteredByYearHandler={filteredByYearHandler} selectedYear={selectedYear}/>
      {expensesItems}
    </div>
  );
}

export default Expenses;