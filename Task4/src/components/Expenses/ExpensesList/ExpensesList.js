import ExpenseItem from '../ExpensesItem/ExpensesItem';
import './ExpensesList.css';

function ExpensesList({data, selectedYear}) {

  const expensesItems = data
    .filter( item => {
      if(selectedYear === 'all') return item;
      return item.date.getFullYear().toString() === selectedYear;})
    .map(item => 
      <ExpenseItem props={item} key={`${item.id}-${item.name}`}/>);

  if(expensesItems.length === 0) return <h2 className="expenses-list__fallback">No expenses found.</h2>

  return (
    <ul className='expenses-list'>
      {expensesItems}
    </ul>
  );
}

export default ExpensesList;