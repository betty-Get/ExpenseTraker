import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

  const submitExpenseData = (myExpenseData) =>{
    
    const expenseData = {
      ...myExpenseData,
      id: Math.random().toString()
    } 
    // console.log(expenseData);
    props.onSubmitFormHandler(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSubmitForm={submitExpenseData}/>
    </div>
  )
}

export default NewExpense
