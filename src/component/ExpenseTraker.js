import React from 'react'
import './ExpenseTraker.css'

function ExpenseTraker({ date, title, amount}) {

    const month = JSON.stringify(date.toLocaleString('en-US', {month: 'long'}));
    const day = JSON.stringify(date.toLocaleString('en-US'), {day: '2-digit'});
    const year = JSON.stringify(date.getFullYear());

  return (
    <div className='expense-item'>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      <div className='expense-item__description'>
        <h2>{JSON.stringify(title)}</h2>
        <div className='expense-item__price'>{JSON.stringify(amount)}</div>
      </div>
    </div>
  )
}

export default ExpenseTraker
