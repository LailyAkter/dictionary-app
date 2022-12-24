import React from 'react'

export default function AddBudget() {
  return (
    <>
        <form id="budget-form" class="budget-form" style={{marginBottom:'20px'}}>
            <h5 class="">Please Enter Your Budget</h5>
            <div class="form-group">
                <input
                    type="number"
                    class="form-control budget-input"
                    id="budget"
                />
            </div>
        
            <button type="submit" class="budget-submit">
                Add Budget
            </button>
        </form>
    </>
  )
}
