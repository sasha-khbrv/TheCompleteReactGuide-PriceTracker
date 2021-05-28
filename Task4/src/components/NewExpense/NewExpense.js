import { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpenseInitialState from './ExpenseInitialState/ExpenseInitialState';
import './NewExpense.css';

function NewExpense({onAddExpenseHandler}) {

  const [formExpandStatus, setFormExpandStatus] = useState(true)

  const toggleFormExpandStatus = () => {
    console.log('click');
    setFormExpandStatus(!formExpandStatus)
  }

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    }
    onAddExpenseHandler(expenseData);
  };

  return (
    <div className='new-expense'>
      {
        formExpandStatus 
          ? <ExpenseForm onSaveExpenseData={saveExpenseData} onToggleFormExpandStatus={toggleFormExpandStatus}/>
          : <ExpenseInitialState onToggleFormExpandStatus={toggleFormExpandStatus}/>
      }
    </div>
  );
}

export default NewExpense;