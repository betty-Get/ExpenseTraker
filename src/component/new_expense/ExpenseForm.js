import React, {useState} from "react";
import './ExpenseForm.css'


function ExpenseForm(props) {
  
    const [newTitle, setNewTitle] = useState("");
   const [newAmount, setNewAmount] = useState("");
    const [newDate, setNewDate] = useState();
    
    const titleChangeHandler= (event) =>{
        setNewTitle(event.target.value);
    }

    const dateChangeHandler= (event) =>{
        setNewDate(event.target.value);
    }

    const amountChangeHandler= (event) =>{
        setNewAmount(event.target.value);
    }

    const onSubmit = (event) =>{
      event.preventDefault();

      const expenseData = {
        title: newTitle,
        date: new Date(newDate),
        amount: newAmount
        
      }
      // console.log(expenseData);
      props.onSubmitForm(expenseData);
    }
  return (
    // <div>
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" value={newTitle} type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={newDate} type='date'
            min='2019-01-01'
            max='2022-12-31' selected={null} onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input name="amount"  value={newAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
    // </div>
  );
}

export default ExpenseForm;
