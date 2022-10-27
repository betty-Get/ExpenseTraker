import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseTraker.css'

function ExpenseTraker({ date, title, amount}) {

    

  return (
    <div className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{JSON.stringify(title)}</h2>
        <div className='expense-item__price'>{JSON.stringify(amount)}</div>
      </div>
    </div>
  )
}

export default ExpenseTraker
