import React, {useState} from 'react';

import ExpenseTraker from './ExpenseTraker';
import Card from '../ui/Card';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2020');

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  return (
    <div>
  <Card className="expenses">
    <ExpensesFilter selected={filterYear} onChangeFilter={filterHandler}/>
    {props.items.map((expense)=>(
      <ExpenseTraker
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
      
      {/* <ExpenseTraker
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseTraker
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseTraker
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Expenses;