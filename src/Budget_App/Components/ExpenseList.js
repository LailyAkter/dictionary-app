import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList({expenses,handleEditButton}) {
  return (
    <>
        <h2 class="mb-4 text-center">Expense List</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Expense Title</th>
                    <th>Expense Amount</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="expenselist">
                {
                    expenses.map((expense)=>{
                        return (
                            <> 
                                <ExpenseItem expense={expense} handleEditButton={handleEditButton}/>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
