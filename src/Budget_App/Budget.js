import { isEditable } from '@testing-library/user-event/dist/utils/edit/isEditable';
import React,{ useContext, useState} from 'react'
import AddBudget from './Components/AddBudget';
import AddExpense from './Components/AddExpense';
import BudgetExpBal from './Components/BudgetExpBal';
import EditExpense from './Components/EditExpense';
import ExpenseList from './Components/ExpenseList';
import { AppContext } from './Context/AppContext';

export default function Budget() {
    const {expenses} = useContext(AppContext);
    const [isEditable,setIsEditable] = useState(false)

    const handleEditButton = () =>{
        setIsEditable(true);
    }
  return (
    <>
        <div class="container">
            <div class="row">
                <h3 class="mb-4 mt-4 text-center">Budget App</h3>
                <div class="col-md-12 row my-3" >
                    <BudgetExpBal/>
                </div>
        
                <div class="col-md-10 row offset-md-2 my-3">
                    <div className='col-md-4'>
                        <AddBudget/>
                    </div>
                    <div className='col-md-6'>
                        {
                            isEditable ? <EditExpense expenses={expenses} /> : <AddExpense/>
                        }
                    </div>
                </div>

                <div class="col-md-8 offset-md-2 my-3 mb-3">
                    <ExpenseList expenses={expenses} handleEditButton={handleEditButton}/>
                </div>

            </div>
        </div>
    </>
  )
}
