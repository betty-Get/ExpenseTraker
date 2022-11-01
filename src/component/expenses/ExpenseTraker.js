import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseTraker.css'
import Card from '../ui/Card'

function ExpenseTraker({title, amount, date}) {
  // const [titles, setTitles] = useState(JSON.stringify(title));

  // const handleClick = () => {
  //   setTitles('updated');
  //   console.log('clicked!')
  // }

  return (
  <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{JSON.stringify(title)}</h2>
        <div className='expense-item__price'>{JSON.stringify(amount)}Birr</div>
      </div>
      <button >change</button>
    </Card>
  )
}

export default ExpenseTraker
