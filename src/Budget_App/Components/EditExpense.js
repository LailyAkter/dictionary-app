import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';


export default function EditExpense({expenses}) {
    // console.log(expenses)
    

    // const expense = expenses.filter((exp)=> exp.id === )
    const [item,setItem] = useState();
    const {dispatch} = useContext(AppContext);
    const handleChange = (e) => {
        setItem({...item,[e.target.name] : e.target.value})
    }

    const submitHandle = (event) => {
        event.preventDefault();

        const expenses = {
            id:nanoid(),
            title:item.title,
            amount:parseInt(item.amount)
        }

        dispatch({
            type:"EDIT_EXPENSE",
            payload: expenses
        })
    }

  return (
    <>
        <form id="expense-form" class="expense-form">
            <h5 class="expense-title">Please Enter Your Expense Title</h5>
            <div class="form-group mb-3">
                <input
                    type="text"
                    class="form-control expense-input"
                    name="title"
                    // onChange={handleChange}
                    style={{marginBottom:'20px'}}
                    // value={item.title}
                />
            </div>
            <h5 class="expense-title">Please Enter Expense Amount</h5>
            <div class="form-group">
                <input
                    type="number"
                    class="form-control expense-input"
                    name="amount"
                    // onChange={handleChange}
                    // value={item.amount}
                />
            </div>
            <button type="submit" class="expense-submit">
                Edit Expense
            </button>
        </form>
    </>
  )
}
