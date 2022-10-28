import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseTraker.css'
import Card from '../ui/Card'

function ExpenseTraker({ date, title, amount}) {
  const [titles, setTitles] = useState(JSON.stringify(title));

  const handleClick = () => {
    setTitles('updated');
    console.log('clicked!')
  }

  return (
  <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{titles}</h2>
        <div className='expense-item__price'>{JSON.stringify(amount)}</div>
      </div>
      <button onClick={handleClick}>change</button>
    </Card>
  )
}

export default ExpenseTraker
