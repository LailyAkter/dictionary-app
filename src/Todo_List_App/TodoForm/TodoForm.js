import React, { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoForm({addTask}) {
  const [todo,setTodo] = useState('');
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTask(todo);
    toast('added todo list')
    setTodo('')
  }

  return (
    <>
      <div id="myDIV" class="header">
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="myInput" 
            placeholder="Title..." 
            onChange={(e)=>setTodo(e.target.value)}
            value={todo}
          />
          <button style={{border:"none"}} class="addBtn">Add</button>
        </form>
        <ToastContainer/>
      </div>
    </>
  )
}
