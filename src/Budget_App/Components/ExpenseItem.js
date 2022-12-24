import React from 'react'

export default function ExpenseItem({expense,handleEditButton}) {
  // const handleEditButton = (event,id) => {
  //   // alert(setIsEditableId(id))
  //   event.preventDefault();
  //   setIsEditableId(id);
  // }

  return (
    <>
        <tr>
            <td>{expense.id}</td>
            <td>{expense.title}</td>
            <td>{expense.amount}</td>
            <td className='btn btn-primary' onClick={()=>handleEditButton(expense.id)} style={{marginRight:'10px',marginBottom:'10px'}}>Edit</td>
            <td className='btn btn-danger'  style={{marginBottom:'10px'}}>Delete</td>
        </tr>
    </>
  )
}
