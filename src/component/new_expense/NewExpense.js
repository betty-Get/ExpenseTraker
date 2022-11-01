import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

  const [dispaly, setDisplay] = useState(false);

  const submitExpenseData = (myExpenseData) =>{
    const expenseData = {
      ...myExpenseData,
      id: Math.random().toString()
    } 
    // console.log(expenseData);
    props.onSubmitFormHandler(expenseData);
  }

  const showForm = () =>{
    setDisplay(true);
  }
  const cancel = () =>{
    setDisplay(false);
  }

  return (
    <div className='new-expense'>
      {!dispaly && <button onClick={showForm}>Add Expenses</button>}
      {dispaly && <ExpenseForm onSubmitForm={submitExpenseData} onCancel={cancel}/>}
    </div>
  )
}

export default NewExpense
