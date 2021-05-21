import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense({onAddExpenseHandler}) {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpenseHandler(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  );
}

export default NewExpense;