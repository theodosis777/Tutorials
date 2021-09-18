import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [editMode, setEditMode] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpenseHandler(expenseData);
    setEditMode(false);
  };

  const beginEdit = () => {
    setEditMode(true);
  };

  const stopEdit = () => {
    setEditMode(false);
  };

  return (
    <div className='new-expense'>
      {!editMode && <button onClick={beginEdit}>Add New Expense</button>}
      {editMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onstopEdit={stopEdit}
        />
      )}
    </div>
  );
};

export default NewExpense;
