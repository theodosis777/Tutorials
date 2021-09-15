import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const buttonOnClick = () => {
    setTitle('TEST');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>€{props.amount}</div>
      <button onClick={buttonOnClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
