import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TodoItem({key,todo,handleToggle,deleteTodo}) {
  const handleClick = (e) =>{
    e.preventDefault();
    handleToggle(todo.id)
    toast("complete todo item")
  }

  const handleDelete = (e) => {
    deleteTodo(todo.id)
    toast("delete todo item")
  }
  return (
    <>
      <li  className={todo.complete ? "checked" : ""} key={key}>
        <span onClick={handleClick}>{todo.task}</span>
        <button onClick={handleDelete} style={{float:"right"}}>Remove</button>
      </li>
      <ToastContainer />
    </>
  )
}
