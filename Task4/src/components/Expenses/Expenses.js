import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import './Expenses.css';
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";

function Expenses({data}) {
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredByYearHandler = chosenYear => {
    setSelectedYear(chosenYear);
  }

  return (
    <div className='expenses'>
      <ExpensesFilter onFilteredByYearHandler={filteredByYearHandler} selectedYear={selectedYear}/>
      <ExpensesList data={data} selectedYear={selectedYear}/>
    </div>
  );
}

export default Expenses;