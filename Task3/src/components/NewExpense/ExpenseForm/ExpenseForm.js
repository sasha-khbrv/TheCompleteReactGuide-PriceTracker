import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({onSaveExpenseData}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amoun: enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='newExpenseTitle'>Title</label>
          <input 
            type='text' 
            id='newExpenseTitle' 
            onChange={titleChangeHandler} 
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='newExpenseAmount'>Amount</label>
          <input 
            type='number' 
            id='newExpenseAmount' 
            min='0.01' 
            step='0.01' 
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='newExpenseDate'>Date</label>
          <input 
            type='date' 
            id='newExpenseDate' 
            min='2021-01-01' 
            max='2023-12-31' 
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;