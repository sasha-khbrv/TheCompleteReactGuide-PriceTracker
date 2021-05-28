import './ExpenseInitialState'
function ExpenseInitialState({onToggleFormExpandStatus}) {
  return (
    <button className='new-expense_initial' onClick={onToggleFormExpandStatus}>
      Add new expense
    </button>
  )
}

export default ExpenseInitialState;