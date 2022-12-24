import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function () {
    const {budget} = useContext(AppContext);
    const {expenses} = useContext(AppContext)

    const totalExpense = expenses.reduce((total,expense)=>{
        return total + expense.amount;
    },0)
    console.log(totalExpense)
  return (
    <>
        <div class="col-4 text-center mb-2">
            <h6 class="text-uppercase info-title">budget</h6>
            <h4 class="text-uppercase mt-2 budget" id="total_budget">
                <span>$ </span><span id="budget-amount">{budget}</span>
            </h4>
        </div>
        <div class="col-4 text-center">
            <h6 class="text-uppercase info-title">expenses</h6>
            <h4 class="text-uppercase mt-2 expense" id="total_expense">
                <span>$ </span><span id="expense-amount">{totalExpense}</span>
            </h4>
        </div>
        <div class="col-4 text-center">
            <h6 class="text-uppercase info-title">balance</h6>
            <h4 class="text-uppercase mt-2 balance" id="total_balance">
               <span id="balance-amount">{
                    budget < totalExpense ? <span style={{color:'red'}}>${budget - totalExpense}</span> : <span>${budget - totalExpense}</span>
                }</span>
            </h4>
        </div>
    </>
  )
}
