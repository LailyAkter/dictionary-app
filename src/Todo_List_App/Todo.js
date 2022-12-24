import React, { useEffect, useState } from 'react'
import "./Todo.css";
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todo() {
  const initialValue = [{
    "id": 1,
    "task": "Give dog a bath",
    "complete": true
  }, {
    "id": 2,
    "task": "Do laundry",
    "complete": true
  }, {
    "id": 3,
    "task": "Vacuum floor",
    "complete": false
  }, {
    "id": 4,
    "task": "Feed cat",
    "complete": true
  }, {
    "id": 5,
    "task": "Change light bulbs",
    "complete": false
  }];
  
  const [todos,setTodos] = useState(initialValue);
  const [searchText,setSearchText] = useState('');

  const addTask = (userInput ) => {
    if(userInput === ''){
      toast('please enter your todo')
      return
    }
    let copy = [...todos];
    copy = [...copy, { id: todos.length + 1, task: userInput, complete: false }];
    setTodos(copy);
  }

  const handleToggle = (id) => {
    const mapped = todos.map((todo) => {
      return todo.id === id ? {...todo , complete:todo!=todo.complete} : {...todo}
    })
    setTodos(mapped)
  }

  const deleteTodo = (id) =>{
    const removeTodo = todos.filter((todo)=>{
      return todo.id !== id
    })

    setTodos(removeTodo)
  }

  // search 
    let filterSearch = todos;
    if(searchText && searchText !== ''){
      filterSearch = filterSearch.filter((todo)=>{
        return todo.task.toLowerCase().includes(searchText.toLowerCase())
      })
    }else{
      filterSearch = todos
    }

  // search

   
  return (
    <>
      <div style={{display: "flex",background: 'blue',justifyContent: "center",alignItems: "center",flexDirection: "column",
      padding: "20px",
      margin:" 0 auto"}}>
        <h2 style={{marginBottom:'20px',color:'white'}}>My To Do List</h2>
        <input 
            style={{marginBottom:'20px'}}
            type="text" 
            id="myInput" 
            placeholder="Search here..." 
            onChange={(e)=>setSearchText(e.target.value)}
            value={searchText}
        />
        <TodoForm addTask={addTask}/>
        <TodoList focus={todos.length > 0} todos={filterSearch} handleToggle={handleToggle} deleteTodo={deleteTodo}/>
        <ToastContainer />
      </div>
      
    </>
  )
}
